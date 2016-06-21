import { ICommand } from './ICommand';
import { CommandList } from './CommandList';

/**
 * App
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