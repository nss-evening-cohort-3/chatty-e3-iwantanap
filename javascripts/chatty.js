"use strict"

var Chatty = (() => {

  let messages = [];

  return {
    loadMessages: (callbackFunc) => {
      // The first IIFE should add a public function (e.g. loadMessages) that loads the messages.json file and stores the messages in a private variable.
      $.get("messages.json", function(data){
        messages = data.messages;
        callbackFunc();
      });
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
      $.each(messages, function(i) {
        if (messages[i].id == idOfText) {
          messages[i].message = messageText;
          messages[i].editted = editedId;
          }
        });
      },
    
    replaceMessages: (newArray) => {messages = newArray}
  };
})();