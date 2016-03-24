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
            tempVar[j] = `<span class="curse">${curses[k].toUpperCase()}</span>`
            tempVar[j]
          }
        }
      }
      messageChecker[i].message = tempVar.join(" ")
    };
    Chatty.replaceMessages(messageChecker)
  }


  return Chatty
}(Chatty));