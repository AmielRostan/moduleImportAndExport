const { sayMessage } = require('../messages/say-message')

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

exports.sayHelloTo = sayHelloTo;
