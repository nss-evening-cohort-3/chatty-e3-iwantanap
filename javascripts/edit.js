"use strict"

var Chatty = ((oldChatty) => {

    oldChatty.editModeFunc = (thisMessage) => {
        let messageId = thisMessage.id;
        Chatty.disableEditMode();
        let messageToEditText = thisMessage.getElementsByTagName("p")[1];
        let messageValue = messageToEditText.innerHTML
        messageValue = messageValue.replace(/<p.*<\/p>/g, "");
        messageValue = Chatty.removeEmoji(messageValue);
        messageToEditText.innerHTML = `<input type="text" id="editMode">`;
        let editMode = document.getElementById("editMode")
        editMode.value = messageValue;
        editMode.addEventListener("keypress", (e) => {
            if (event.code === "Enter") {
                let edittedText = editMode.value;
                edittedText = Chatty.addEmoji(edittedText);
                let editTimestamp = new Date();
                let edittedAt = `<p class="editedTag"> edited at ${editTimestamp}</p>`;
                messageToEditText.innerHTML = edittedText 
                Chatty.editMessage(messageId, edittedText, edittedAt);
                Chatty.onToDom()
            }
        });
    }

    oldChatty.disableEditMode = () => {
        
        let editButton = document.getElementsByClassName("editThisMessage");
        for (let i = 0; i < editButton.length; i++) {
            editButton[i].disabled = true;
        };
    }

    return oldChatty
})(Chatty);