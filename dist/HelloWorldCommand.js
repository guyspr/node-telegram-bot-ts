"use strict";
var HelloWorldCommand = (function () {
    function HelloWorldCommand() {
        this.command = /helloworld/;
        this.help = "Displays 'Hello world!'";
    }
    HelloWorldCommand.prototype.exec = function (msg, reply) {
        reply.text("Hello world!");
    };
    return HelloWorldCommand;
}());
exports.HelloWorldCommand = HelloWorldCommand;
