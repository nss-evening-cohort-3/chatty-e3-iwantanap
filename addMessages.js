var Chatty = (function(oldChatty) {


    oldChatty.onToDom = function() {
        var messageArray = Chatty.getMessages();
        var buildString = "";
        for (var i = messageArray.length - 1; i > (messageArray.length - 21) && i > -1; i--) {
            buildString += `<div class="container-fluid" id="${messageArray[i].id}"><div class="col-md-12"> <span class="time-stamp inline"> ${messageArray[i].timestamp} - By ${messageArray[i].user} </span><div class="btn-group btn-group-sm" role="group"><button class="btn btn-default navbar-btn editThisMessage">Edit</button><button class="btn btn-default navbar-btn deleteThisMessage">Delete</button></div><p class="message-text"> ${messageArray[i].message} </p></div></div>`  
        }
        document.getElementById("message-area").innerHTML = buildString;
        Chatty.checkClearButton();
        Chatty.stopEditDelete();
    };

    oldChatty.checkClearButton = function() {
        if (document.getElementById("message-area").innerHTML === "") {
          document.getElementById("clear-board").disabled = true;
        } else {
            document.getElementById("clear-board").disabled = false;
        }
    }


    return oldChatty
}(Chatty));
