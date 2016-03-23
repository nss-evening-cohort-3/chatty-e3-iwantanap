var Chatty = (function(oldChatty) {

    var editMode = false;

    oldChatty.editMode = function(thisMessage) {
        editMode = true;
        var messageToEditText = thisMessage.getElementsByTagName("p")[1];
        var messageValue = messageToEditText.innerHTML
        messageToEditText.innerHTML = `<input type="text" id="editMode">`;
        var editMode = document.getElementById("editMode")
        editMode.value = messageValue;
        editMode.addEventListener("keypress", function(){
            if (event.code === "Enter") {
                var edittedText = editMode.value;
                var editTimestamp = new Date();
                messageToEditText.innerHTML = edittedText + `<p class="editedTag"> edited at ${editTimestamp}</p>`;
            }
        });

    }


    return oldChatty
}(Chatty));