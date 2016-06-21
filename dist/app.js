"use strict";
var CommandList_1 = require('./CommandList');
var App = (function () {
    function App(commands) {
        this.commands = commands;
    }
    App.prototype.run = function (query, msg, reply) {
        for (var index = 0; index < this.commands.length; index++) {
            var cmd = this.commands[index];
            if (query.match(cmd.command)) {
                cmd.exec(msg, reply);
            }
        }
    };
    return App;
}());
var application = new App(CommandList_1.CommandList);
