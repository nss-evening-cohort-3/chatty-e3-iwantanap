var Chatty = (function(oldChatty) {
  var ai = []
  var aiXML = new XMLHttpRequest();
  aiXML.addEventListener("load", function(){
    ai = JSON.parse(this.responseText)
  });
  aiXML.open("GET", "ai.json");
  aiXML.send();

  oldChatty.chooseAI = function() {
    let textAI = {}
    var msgString = Chatty.getMessages()[Chatty.getMessages().length-1].message
    if (msgString.indexOf("?") >= 0) {
      textAI = ai.answers[Math.floor(Math.random()* ai.answers.length)]
    } else if (msgString.toLowerCase().indexOf("hello") >=0) {
      textAI = ai.hello[Math.floor(Math.random()* ai.hello.length)]
    } else if (msgString.toLowerCase().indexOf("bye") >=0) {
      textAI = ai.bye[Math.floor(Math.random()* ai.bye.length)]
    } else if (msgString.toLowerCase().indexOf("die") >=0) {
      textAI = ai.die[Math.floor(Math.random()* ai.die.length)]
    } else {
      textAI = ai.random[Math.floor(Math.random()* ai.random.length)]
    }
    Chatty.addMessages(textAI)
    Chatty.onToDom()
    for (let i=0; i<2; i++) {
      document.getElementById("-1").getElementsByTagName('div')[1].getElementsByTagName('button')[i].disabled = true
    };
  }

  return Chatty
}(Chatty));