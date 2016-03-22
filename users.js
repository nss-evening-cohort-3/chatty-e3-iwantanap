var Chatty = (function(oldChatty) {

    var users = {
        names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
    };

    oldChatty.addUsers = function(newUser) {
        users.names.push(newUser);
        console.log("users", users);
    }

    


    return oldChatty
}(Chatty));