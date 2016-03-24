"use strict"
var Chatty = (function(oldChatty) {
  var curses = [];
  var aiXML = new XMLHttpRequest();
  aiXML.addEventListener("load", function(){
    curses = JSON.parse(this.responseText).bannedNameList.word;
  });
  aiXML.open("GET", "curse.json");
  aiXML.send();
  

  oldChatty.checkCurse = function() {
    var messageChecker = Chatty.getMessages()
    var newMessages = []
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