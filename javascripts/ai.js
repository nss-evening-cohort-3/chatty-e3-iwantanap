"use strict"
var Chatty = (function(oldChatty) {
  //Array for the responses to be stored into
  let ai = [];
  //Starts XHR
  let aiXML = new XMLHttpRequest();
  aiXML.addEventListener("load", function(){
    ai = JSON.parse(this.responseText);
  });
  aiXML.open("GET", "ai.json");
  aiXML.send();
  //Ends XHR

  //Chooses which 'AI' response to post
  oldChatty.chooseAI = function() {
    let textAI = {};
    let msgString = Chatty.getMessages()[Chatty.getMessages().length-1].message;
    //Checks for different reponse variables
    if (msgString === "") {
      textAI = ai.empty[Math.floor(Math.random()* ai.empty.length)];
    } else if (msgString.indexOf("?") >= 0) {
      textAI = ai.answers[Math.floor(Math.random()* ai.answers.length)];
    } else if (msgString.toLowerCase().indexOf("hello") >=0) {
      textAI = ai.hello[Math.floor(Math.random()* ai.hello.length)];
    } else if (msgString.toLowerCase().indexOf("cat") >=0) {
      textAI = ai.cat[Math.floor(Math.random()* ai.cat.length)];
    } else if (msgString.toLowerCase().indexOf("dog") >=0) {
      textAI = ai.dog[Math.floor(Math.random()* ai.dog.length)];
    } else if (msgString.toLowerCase().indexOf("bye") >=0) {
      textAI = ai.bye[Math.floor(Math.random()* ai.bye.length)];
    } else if (msgString.toLowerCase().indexOf("die") >=0) {
      textAI = ai.die[Math.floor(Math.random()* ai.die.length)];
    } else if (msgString.toLowerCase().indexOf("easy") >=0) {
      textAI = ai.easy[Math.floor(Math.random()* ai.easy.length)];
    } else {
      textAI = ai.random[Math.floor(Math.random()* ai.random.length)];
    }
    //Gives timestamp to responses
    textAI.timestamp = new Date();
    Chatty.addMessages(textAI);
    Chatty.onToDom();
  }

  //Prevents user from editing or deleting AI responses
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