var Chatty = (function(oldChatty) {

var id = 5;

    oldChatty.createNewMessage = function() {
        var newMessage = {};
        newMessage.message = document.getElementById("message-input").value;
        newMessage.timestamp = new Date();
        newMessage.user = "butt";
        newMessage.id = id;
        id++
        Chatty.addMessages(newMessage);
        Chatty.onToDom();
    };


    return oldChatty
}(Chatty));