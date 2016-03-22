var chattyBody = document.querySelector("body");

// NAV: If there are no messages, then the clear messages button should be disabled (see example above).


chattyBody.addEventListener("keypress", function(e) {
  // NAV: When return key is detected, you'll create a new message.
  if (event.target.id === "message-input" && event.code === "Enter") {
    Chatty.createNewMessage();
    setTimeout(Chatty.chooseAI, Math.floor(Math.random()* 5000))
  }
});

chattyBody.addEventListener("click", function(e) {
  // NAV: When the user clicks the clear messages button, all current chat messages should be removed from the application.
  if (event.target.id === "clear-board") {
    for (var i = Chatty.getMessages().length - 1; i > (Chatty.getMessages().length - 21) && i > -1; i--) {
      Chatty.deleteMessage(i);
      Chatty.onToDom();
    }
  }

  if (event.target.className.includes("deleteThisMessage") === true) {
    thisMessage = e.target.parentElement.parentElement.parentElement.id;
    Chatty.deleteSingleMessage(thisMessage);
  }

  if (event.target.id === "dark-theme" && event.target.checked === true) {
    chattyBody.classList.add("dark-theme");
  }

  if (event.target.id === "dark-theme" && event.target.checked === false) {
    chattyBody.classList.remove("dark-theme");
  }

  if (event.target.id === "large-text" && event.target.checked === true) {
    document.getElementById("message-area").classList.add("larger-text");
  }

  if (event.target.id === "large-text" && event.target.checked === false) {
    document.getElementById("message-area").classList.remove("larger-text");
  }

});