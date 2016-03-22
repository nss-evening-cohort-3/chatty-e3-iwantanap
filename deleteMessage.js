var Chatty = (function(oldChatty) {


    oldChatty.deleteSingleMessage = function(msgId) {
        for (var deleteThisId in Chatty.getMessages()) {
            if (Chatty.getMessages()[deleteThisId].id == msgId) {
                Chatty.deleteMessage(deleteThisId);
                Chatty.onToDom();
                Chatty.checkClearButton();
                break;
            }
        }
    };


    return oldChatty
}(Chatty));