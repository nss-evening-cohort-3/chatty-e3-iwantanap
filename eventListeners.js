var chattyBody = document.querySelector("body");

// NAV: If there are no messages, then the clear messages button should be disabled (see example above).
if (document.getElementById("message-area").innerHTML === "") {
  document.getElementById("clear-board").setAttribute("disabled", "disabled");
}

chattyBody.addEventListener("keypress", function(e) {
  // NAV: When return key is detected, you'll create a new message.
  if (event.target.id === "message-input" && event.code === "Enter") {
    Chatty.createNewMessage();
  }
});

chattyBody.addEventListener("click", function(e) {
  // NAV: When the user clicks the clear messages button, all current chat messages should be removed from the application.
  if (event.target.id === "clear-board" /* && BUTTON IS ENABLED*/) {
    console.log("deleteAllMessages", e);
    // deleteAllMessages(e);
  }
  if (event.target.className.includes("deleteThisMessage") === true) {
    thisMessage = e.target.parentElement.parentElement.parentElement.id;
    Chatty.deleteSingleMessage(thisMessage);
  }

  if (event.target.id === "dark-theme" && event.target.checked === true) {
    console.log("goToDarkTheme", e);
    // goToDarkTheme(e);
  }

  if (event.target.id === "dark-theme" && event.target.checked === false) {
    console.log("goToLightTheme", e);
    // goToLightTheme(e);
  }

  if (event.target.id === "large-text" && event.target.checked === true) {
    console.log("goToLargeText", e);
    // goToLargeText(e);
  }

  if (event.target.id === "large-text" && event.target.checked === false) {
    console.log("goToRegText", e);
    // goToRegText(e);
  }

});