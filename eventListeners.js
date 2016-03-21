var chattyBody = document.querySelector("body");

// NAV: If there are no messages, then the clear messages button should be disabled (see example above).
if (document.getElementById("message-area") /*HAS NO CHILD*/) {
      document.getElementById("delete-btn").setAttribute("disabled", "disabled");
}

chattyBody.addEventListener("keypress", function(e) {
  // NAV: When return key is detected, you'll create a new message.
  if (event.target.id === "message-input" && event.code === "Enter") {
    createNewMessage(e);
  }
});

chattyBody.addEventListener("click", function(e) {

  // NAV: When the user clicks the clear messages button, all current chat messages should be removed from the application.
  if (event.target.id === "delete-btn" && /*BUTTON IS ENABLED*/) {
    console.log("deleteAllMessages", e);
    // deleteAllMessages(e);
  }

  if (event.target.className === "deleteThisMessage") {
    console.log(" Chatty.deleteSingleMessage", e);
    // Chatty.deleteSingleMessage(e)
  }

  if (event.target.id === "dark-theme" && event.target.value === "checked") {
    console.log("goToDarkTheme", e);
    // goToDarkTheme(e);
  }

  if (event.target.id === "dark-theme" && event.target.value === "unchecked") {
    console.log("goToLightTheme", e);
    // goToLightTheme(e);
  }

  if (event.target.id === "large-text" && event.target.value === "checked") {
    console.log("goToLargeText", e);
    // goToLargeText(e);
  }

  if (event.target.id === "large-text" && event.target.value === "unchecked") {
    console.log("goToRegText", e);
    // goToRegText(e);
  }

});