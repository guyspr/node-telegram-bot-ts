/// <reference path="../typings/index.d.ts"/>
var botgram = require('botgram');
import { Config } from './config'; // Contains application configuration
import { ICommand } from './Commands/ICommand';
import { CommandList } from './CommandList'; // Contains all active commands

/**
 * Base application class, used to run commands
 */
class App {
  private commands: ICommand[];
  private help: string = "*The following commands are available:*\r\n";
  
  constructor(commands: ICommand[]) {
    this.commands = commands;
    for (var i = 0; i < commands.length; i++) {
      this.help += `\r\n${commands[i].command.toString().replace(/[\/$]/g, '')} - ${commands[i].help}`
    }
  }

  public run(msg, reply): void{
    // Catch /help 
    if (msg.command.match(/help$/)) {
      reply.markdown(this.help);
      return;
    }
    // Loop trough all possible commands
    for (var index = 0; index < this.commands.length; index++) {
      var cmd = this.commands[index];
      if (msg.command.match(cmd.command)) {
        cmd.exec(msg, reply);
      }
    }
  }
}

let application = new App(CommandList);

let bot = new botgram(Config.token);
console.log("Bot is up and running!");

// Catch-all for commands
bot.command(function(msg, reply, next) {
  application.run(msg, reply);
});