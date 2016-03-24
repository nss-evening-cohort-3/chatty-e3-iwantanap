"use strict"

var Chatty = (() => {

  let messages = [];

  return {
    
    loadMessages: (callbackFunc) => {
      // The first IIFE should add a public function (e.g. loadMessages) that loads the messages.json file and stores the messages in a private variable.
      //Step 1: Set up http req for messages
      let messagesReq = new XMLHttpRequest;

      //Step 2: Go get it
      messagesReq.open("GET", "messages.json");
      messagesReq.send();

      //Step 3: Event Listener
      messagesReq.addEventListener("load", messagesSuccess);
      messagesReq.addEventListener("failed", failedExecution);

       //Step 4: If json fails to load
      function failedExecution() {
        alert("Error loading page. Please refresh.")
      };

      //Step 5: Translate into JS
      //Step 6: Create callback for once the messages page loads
      function messagesSuccess() {
        messages = JSON.parse(this.responseText).messages;
        callbackFunc();
      };
    },

    //Adds new message text to the messages Array
    addMessages: (newMessageObject) => messages.push(newMessageObject),

    //Removes message text from the messages Array
    deleteMessage: (msgId) => messages.splice(msgId, 1),

    //Returns the message array to anything that calls it
    getMessages: () => messages,

    //Function takes the message edit target Array element and adds the edited message text
    // and edit-timestamp to that array element
    editMessage: (idOfText, messageText, editedId) => {
      for (let i = 0; i < messages.length; i++) {
        if (messages[i].id == idOfText) {
          messages[i].message = messageText;
          messages[i].editted = editedId;
          break;  
        };
      };
    }
  };
})();