var chattyBody = document.querySelector("body");
// var bodyMinusModal = document.getElementById("bodyMinusModal")

// NAV: If there are no messages, then the clear messages button should be disabled (see example above).


chattyBody.addEventListener("keypress", function(e) {
  // NAV: When return key is detected, you'll create a new message.
  if (event.target.id === "message-input" && event.code === "Enter") {
    Chatty.createNewMessage();
    setTimeout(Chatty.chooseAI, Math.floor(Math.random()* 5000))
    document.getElementById("message-input").value = ""
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

  // Accessibility Themes
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

  // Fun Themes
  if (event.target.id === "theme1" && event.target.checked === true) {
    chattyBody.classList.remove("theme2", "theme3", "theme4")
    chattyBody.classList.add("theme1");
  }

  if (event.target.id === "theme2" && event.target.checked === true) {
    chattyBody.classList.remove("theme1", "theme3", "theme4")
    chattyBody.classList.add("theme2");
  }

  if (event.target.id === "theme3" && event.target.checked === true) {
    chattyBody.classList.remove("theme1", "theme2", "theme4")
    chattyBody.classList.add("theme3");
  }

  if (event.target.id === "theme4" && event.target.checked === true) {
    chattyBody.classList.remove("theme1", "theme2", "theme3")
    chattyBody.classList.add("theme4");
  }

  if (event.target.id === "themeNone" && event.target.checked === true) {
    chattyBody.classList.remove("theme1", "theme2", "theme3", "theme4")
  }

});

chattyBody.addEventListener("change", function(e){
  if (event.target.tagName === "SELECT" && event.target.value === "addUser") {
    var newUser = prompt("Name of new user");
    Chatty.addUsers(newUser);
  }
});