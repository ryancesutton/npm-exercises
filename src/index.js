
const $ = require('jquery');

const veryNiceMessage = require('./say-hello');

const sayHello = () => console.log('hello');

sayHello();

$(".click-me").click(function () {
    alert("clicked the body");
});