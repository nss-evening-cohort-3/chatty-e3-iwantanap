"use strict"
var Chatty = (function(oldChatty) {
  //Array to store curses from JSON into
  var curses = [];
  //Begin XHR
  var aiXML = new XMLHttpRequest();
  aiXML.addEventListener("load", function(){
    curses = JSON.parse(this.responseText).bannedNameList.word;
  });
  aiXML.open("GET", "curse.json");
  aiXML.send();
  //End XHR

  //Checks the message array for curses
  oldChatty.checkCurse = function() {
    var messageChecker = Chatty.getMessages()
    var newMessages = []
    //Runs through message array takes into strings and breaks each into an array and then finally checks each agains the curse words. If it finds any, it adds styling.After puts them all back together and stores it back into the message array.
    for (var i in messageChecker) {
      let tempVar = messageChecker[i].message.split(" ")
      for (var j in tempVar) {
        for (var k in curses) {
          if (tempVar[j].toLowerCase() === curses[k]) {
            tempVar[j] = `<span class='curse'>${curses[k].toUpperCase()}</span>`
            tempVar[j]
          }
        }
      }
      messageChecker[i].message = tempVar.join(" ")
    };
    Chatty.replaceMessages(messageChecker)
  }

  //Reverses the previous process, but only for 1 message. Takes Styling out of the string.
    oldChatty.revertCurse = function(msgText, msgID) {
    msgID = document.getElementById(msgID)
    let span = msgID.getElementsByTagName('span')
    var newMessages = []
    let tempVar = msgText.split(" ")
    let j = 1
    for (var i in tempVar) {
      if (tempVar[i] === "<span") {
        tempVar.splice(i,1)
      }
      if (tempVar[i].indexOf("</span>") > -1) {
        tempVar[i] = span[j].innerHTML
        j++
      }
    }
    return tempVar.join(" ")
  }

  return Chatty
}(Chatty));