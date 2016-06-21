/// <reference path="../typings/node.d.ts"/>
var botgram = require('botgram');
import { Config } from './config'; // Contains application configuration
import { ICommand } from './ICommand';
import { CommandList } from './CommandList'; // Contains all active commands

/**
 * Base application class, used to run commands
 */
class App {
  private commands: ICommand[];
  constructor(commands: ICommand[]) {
    this.commands = commands;
  }
  public run(query: string, msg, reply): void{
    for (var index = 0; index < this.commands.length; index++) {
      var cmd = this.commands[index];
      if(query.match(cmd.command)){
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
  console.log(msg)
  application.run(msg.command, msg, reply);
});