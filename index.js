var msg = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text: msg.wName + " from " + msg.wLocation,
    e: "oO",
    T: "U "
}));

console.log(msg);