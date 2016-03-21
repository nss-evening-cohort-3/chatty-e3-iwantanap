var chattyBody = document.querySelector("body");

chattyBody.addEventListener("keypress", function(event) {
  // NAV: When return key is detected, you'll create a new message.
  if (event.target.id === "message-input" && event.code === "Enter") {
    createNewMessage(e);
  }
});

chattyBody.addEventListener("click", function(event) {

  // NAV: When the user clicks the clear messages button, all current chat messages should be removed from the application.
  if (event.target.id === "delete-btn") {
    deleteAllMessages(e);
  }

  if (event.target.className === "deleteThisMessage") {
    Chatty.deleteSingleMessage(id)
  }

});