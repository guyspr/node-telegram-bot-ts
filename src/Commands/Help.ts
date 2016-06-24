import { ICommand } from './ICommand';

export class Help implements ICommand {
  command = /help$/;
  help = "Displays a list of all available commands.";
  helpString: string = "*The following commands are available:*\r\n";

  constructor(commands:ICommand[]){
    for (var i = 0; i < commands.length; i++) {
      this.helpString += `\r\n${commands[i].command.toString().replace(/[\/$]/g, '')} - ${commands[i].help}`
    }
  }

  // Implement the execute command
  exec(msg, reply): void {    
    reply.markdown(this.helpString);
  }
}
