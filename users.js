var Chatty = (function(oldChatty) {

    var users = {
        names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
    };

    oldChatty.addUsers = function(newUser) {
        users.names.push(newUser);
        Chatty.addUsersToDom();
        console.log("users", users);
    }

    oldChatty.addUsersToDom = function() {
        var userArray = users.names;
        var buildUserDropDown = ""
        for (var i = 0; i < userArray.length; i++) {
            buildUserDropDown += `<option value=${userArray[i].toLowerCase()}>${userArray[i]}</option>`
        }
        document.getElementById("user-dropdown").innerHTML = `<option value="default">Select User</option>` + buildUserDropDown + `<option value="addUser">+Add User</option>`;
    }

    


    return oldChatty
}(Chatty));