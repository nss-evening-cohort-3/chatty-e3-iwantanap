var Chatty = (function(oldChatty) {

    var users = {
        names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
    };

    oldChatty.addUsers = function(newUser) {
        users.names.push(newUser);
        Chatty.addUsersToDom();
    };

    oldChatty.addUsersToDom = function() {
        var userArray = users.names;
        var buildUserDropDown = ""
        for (var i = 0; i < userArray.length; i++) {
            buildUserDropDown += `<option value=${userArray[i].toLowerCase()}>${userArray[i]}</option>`
        }
        document.getElementById("user-dropdown").innerHTML = `<option value="defaultVal">Select User</option>` + buildUserDropDown + `<option value="addUser">+Add User</option>`;
    };

    oldChatty.selectUsers = function(userValue) {
        var selectedUser = document.getElementById("user-dropdown").value;
        if (selectedUser === "defaultVal") {
            alert("Select a user, bozo.")
        } else {
            return selectedUser;
        }
    }

    


    return oldChatty
}(Chatty));