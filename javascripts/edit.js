"use strict"

var Chatty = ((oldChatty) => {

    oldChatty.editModeFunc = (thisMessage) => {
        Chatty.disableEditMode(); //first disables edit mode button for all messages to prevent bug where first-selected message text is applied to all messages in editMode 
        let messageId = thisMessage.id; 
        let messageToEditText = thisMessage.getElementsByTagName("p")[1]; //gathers message content
        let messageValue = messageToEditText.innerHTML;  //gathers message content
        messageValue = messageValue.replace(/<p.*<\/p>/g, "");  //removes "edited tag" from any messages previously edited when user puts a message into edit mode multiple times
        messageValue = Chatty.removeEmoji(messageValue); //puts any images into regular [] form for edit purposes
        messageToEditText.innerHTML = `<input type="text" id="editMode">`; //inserts text input mode where message text was displayed
        let editMode = document.getElementById("editMode"); //selects element in editMode
        editMode.value = messageValue; //inserts current message text as default value for text input
        editMode.addEventListener("keypress", (e) => {
            if (event.code === "Enter") {
                let edittedText = editMode.value; //grabs input value and stores it in a new var
                edittedText = Chatty.addEmoji(edittedText); //transforms and [] elements back into emojis
                let editTimestamp = new Date(); //creates timestamp for edited time
                let edittedAt = `<p class="editedTag"> edited at ${editTimestamp}</p>`; //adds element that lets users know the last time the message was edited
                messageToEditText.innerHTML = edittedText //replaces message content area with new updated message
                Chatty.editMessage(messageId, edittedText, edittedAt); //updates private message array
                Chatty.onToDom() //updates DOM with new array, also reactivates all edit buttons
            }
        });
    }

    oldChatty.disableEditMode = () => {
        let editButton = document.getElementsByClassName("editThisMessage"); //grabs all edit buttons for messages currently displayed on dom
        for (let i = 0; i < editButton.length; i++) {
            editButton[i].disabled = true; //loops through each edit btton and disables it temporarily - it is editable once user leaves edit mode and items are added to the DOM
        };
    }

    return oldChatty
})(Chatty);