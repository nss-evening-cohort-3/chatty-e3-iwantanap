var Chatty = (function(oldChatty) {

var id = 5;

    oldChatty.createNewMessage = function() {
        var newMessage = {};
        newMessage.message = document.getElementById("message-input").value;
        newMessage.timestamp = new Date();
        newMessage.user = Chatty.selectUsers();
        newMessage.id = id;
        if (newMessage.user !== undefined) {
            newMessage.user = newMessage.user.charAt(0).toUpperCase() + newMessage.user.slice(1);
            id++
            Chatty.addMessages(newMessage);
            Chatty.onToDom();
        }
    };


    return oldChatty
}(Chatty));