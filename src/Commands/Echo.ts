import { ICommand } from './ICommand';

export class Echo implements ICommand {
  command = /echo/;
  help = "Echo's the text given as arguments";
  usage = "Usage: /echo [text]";

  // Implement the execute command
  exec(msg, reply): void {
    var args:string = msg.args();
    if(args.trim().length == 0){
      reply.text(this.usage);
      return;
    }
    reply.text(args);
  }
}
