"use strict"

var Chatty = ( (oldChatty) => {

// The current emoji list
  let emojiList = {
      "[happy]": '<img src="emoji/happy.png">',
      "[sleepy]": '<img src="emoji/sleepy.png">',
      "[poopy]": '<img src="emoji/poopy.png">'
  };

// Adds Emoji to any newly commited message
  oldChatty.addEmoji = (sentMessageString) => {
    for (let emojiKey in emojiList) {

      if (sentMessageString.includes(emojiKey)) {
          sentMessageString = sentMessageString.replace(emojiKey, emojiList[emojiKey]);
      };
    };
      return sentMessageString;
  };

  return oldChatty

})(Chatty);