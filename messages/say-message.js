const msg = require("./hello-message");

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(msg.helloMessage);

module.exports.sayMessage = sayMessage;
