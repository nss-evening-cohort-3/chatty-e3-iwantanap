var Chatty = (function() {

    var messagess = [];

    return {
        loadMessages: function(callbackFunc) {
            // The first IIFE should add a public function (e.g. loadMessages) that loads the messages.json file and stores the messages in a private variable.
            //Step 1: Set up http req for messages
            var messagesReq = new XMLHttpRequest;

            //Step 2: Go get it
            messagesReq.open("GET", "messages.json");
            messagesReq.send();

            //Step 3: Event Listener
            messagesReq.addEventListener("load", messagesSuccess);
            messagesReq.addEventListener("failed", failedExecution);

            //Step 4: Translate into JS
            function failedExecution() {
                alert("Error loading page. Please refresh.")
            };

            //Step 5: Create callback for once the messages page loads
            function messagesSuccess() {
                messagess = JSON.parse(this.responseText);
                callbackFunc();
            };
        }, 

        getMessages: function() {
            // It should also expose a public getter to read the messages 
            return messages;
        }
    }
}());