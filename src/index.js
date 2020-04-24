
const $ = require('jquery');

const sayHello = () => console.log('hello');

sayHello();

$(".click-me").click(function () {
    alert("clicked the body");
});