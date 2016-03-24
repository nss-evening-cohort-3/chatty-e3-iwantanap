var Chatty = (function(oldChatty) {

    var editMode = false;

    oldChatty.editMode = function(thisMessage) {
        editMode = true;
        var messageId = thisMessage.id;
        var messageToEditText = thisMessage.getElementsByTagName("p")[1];
        var messageValue = messageToEditText.innerHTML
        messageValue = messageValue.replace(/<p.*<\/p>/g, "");
        messageValue = Chatty.removeEmoji(messageValue);
        messageToEditText.innerHTML = `<input type="text" id="editMode">`;
        var editMode = document.getElementById("editMode")
        editMode.value = messageValue;
        editMode.addEventListener("keypress", function(){
            if (event.code === "Enter") {
                var edittedText = editMode.value;
                edittedText = Chatty.addEmoji(edittedText);
                var editTimestamp = new Date();
                var edittedAt = `<p class="editedTag"> edited at ${editTimestamp}</p>`;
                messageToEditText.innerHTML = edittedText 
                Chatty.editMessage(messageId, edittedText, edittedAt);
                Chatty.onToDom()
            }
        });

    }


    return oldChatty
}(Chatty));