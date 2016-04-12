"use strict"

var Chatty = ((oldChatty) => {

    oldChatty.editModeFunc = (thisMessage) => {
        Chatty.disableEditMode(); //first disables edit mode button for all messages to prevent bug where first-selected message text is applied to all messages in editMode 
        let messageId = thisMessage.id; 
        let messageToEditText = $(thisMessage).find(".message-text"); //gathers message content
        let messageValue = messageToEditText.html();
        messageValue = messageValue.replace(/<p.*<\/p>/g, "");  //removes "edited tag" from any messages previously edited when user puts a message into edit mode multiple times
        messageValue = Chatty.removeEmoji(messageValue); //puts any images into regular [] form for edit purposes
        messageValue = Chatty.revertCurse(messageValue, messageId); 
        messageToEditText.html(`<input type="text" id="editMode">`); //inserts text input mode where message text was displayed
        let editMode = $("#editMode")//selects element in editMode
        editMode.val(messageValue); //inserts current message text as default value for text input
        editMode.keypress((e) => {
            if (event.code === "Enter") {
                let edittedText = editMode.val(); //grabs input value and stores it in a new var
                edittedText = Chatty.addEmoji(edittedText); //transforms any [] elements back into emojis
                let editTimestamp = new Date(); //creates timestamp for edited time
                let editingUser = $("#user-dropdown").val(); //grabs user value at time of edit
                if (editingUser === "addUser" || editingUser === "defaultVal") {
                    editingUser = "Idiot"
                } else if (editingUser) {
                    editingUser = editingUser.charAt(0).toUpperCase() + editingUser.slice(1);
                }
                let edittedAt = `<p class="editedTag"> edited at ${editTimestamp} by ${editingUser}</p>`; //adds element that lets users know the last time the message was edited
                messageToEditText.html(edittedText); //replaces message content area with new updated message
                Chatty.editMessage(messageId, edittedText, edittedAt); //updates private message array
                Chatty.onToDom() //updates DOM with new array, also reactivates all edit buttons
            }
        });
    }

    oldChatty.disableEditMode = () => {
        $(".editThisMessage").each(function(){
            $(this).prop("disabled", true)
        }); //grabs all edit buttons for messages currently displayed on dom
    }

    return oldChatty
})(Chatty);