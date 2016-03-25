"use strict"
var Chatty = (function(oldChatty) {

    //Adds 20 responses to the DOM
    oldChatty.onToDom = function() {
        //Checks for cursing and adds styling to it.
        Chatty.checkCurse()
        let messageArray = Chatty.getMessages();
        let buildString = "";
        //creates string to put into the DOM
        for (let i = messageArray.length - 1; i > (messageArray.length - 21) && i > -1; i--) {
            buildString += `<div class="container-fluid" id="${messageArray[i].id}"><div class="col-md-12"> <span class="time-stamp inline"> ${messageArray[i].timestamp} - By <p class="bold">${messageArray[i].user}</p> </span><div class="btn-group btn-group-sm" role="group"><button class="btn btn-default navbar-btn editThisMessage">Edit</button><button class="btn btn-default navbar-btn deleteThisMessage">Delete</button></div><p class="message-text"> ${messageArray[i].message} ${messageArray[i].editted}</p></div></div>`  
        }
        //Adds Emojis to the string
        buildString = Chatty.addEmoji(buildString);
        //Puts string into the DOM
        document.getElementById("message-area").innerHTML = buildString;
        //Check for empty string and stops from editing or deleting AI responses
        Chatty.checkClearButton();
        Chatty.stopEditDelete();
    };

    //Checks to see if clear button is useable or not.
    oldChatty.checkClearButton = function() {
        if (document.getElementById("message-area").innerHTML === "") {
          document.getElementById("clear-board").disabled = true;
        } else {
            document.getElementById("clear-board").disabled = false;
        }
    }


    return oldChatty
}(Chatty));
