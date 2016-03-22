var Chatty = (function(oldChatty) {


    oldChatty.createNewMessage = function() {
        var newMessage = {};
        newMessage.message = document.getElementById("message-input").value;
        newMessage.timestamp = Date.now();
        newMessage.user = "butt";
        Chatty.addMessages(newMessage);
        Chatty.onToDom();
    };


    return oldChatty
}(Chatty));