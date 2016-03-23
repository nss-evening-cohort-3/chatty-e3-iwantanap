"use strict"
var Chatty = (function(oldChatty) {
  var ai = [];
  var aiXML = new XMLHttpRequest();
  aiXML.addEventListener("load", function(){
    ai = JSON.parse(this.responseText);
  });
  aiXML.open("GET", "ai.json");
  aiXML.send();

  oldChatty.chooseAI = function() {
    let textAI = {};
    var msgString = Chatty.getMessages()[Chatty.getMessages().length-1].message;
    if (msgString === "") {
      textAI = ai.empty[Math.floor(Math.random()* ai.empty.length)];
    } else if (msgString.indexOf("?") >= 0) {
      textAI = ai.answers[Math.floor(Math.random()* ai.answers.length)];
    } else if (msgString.toLowerCase().indexOf("hello") >=0) {
      textAI = ai.hello[Math.floor(Math.random()* ai.hello.length)];
    } else if (msgString.toLowerCase().indexOf("bye") >=0) {
      textAI = ai.bye[Math.floor(Math.random()* ai.bye.length)];
    } else if (msgString.toLowerCase().indexOf("die") >=0) {
      textAI = ai.die[Math.floor(Math.random()* ai.die.length)];
    } else if (msgString.toLowerCase().indexOf("easy") >=0) {
      textAI = ai.easy[Math.floor(Math.random()* ai.easy.length)];
    } else {
      textAI = ai.random[Math.floor(Math.random()* ai.random.length)];
    }
    textAI.timestamp = new Date();
    Chatty.addMessages(textAI);
    Chatty.onToDom();
  }

  oldChatty.stopEditDelete = function() {
    let runThrough = document.getElementsByClassName('container-fluid');
    for (let i in runThrough) {
      if (runThrough[i].id === "-1") {
        for (let j=0; j<2; j++) {
          runThrough[i].getElementsByTagName('div')[1].getElementsByTagName('button')[j].disabled = true
        };
      };
    };
  }

  return Chatty
}(Chatty));