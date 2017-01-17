import { ICommand } from './ICommand';

export class Remindme implements ICommand {
  command = /remindme/;
  help = "Helps you remind something in a few minutes.";
  usage = "Usage: /remindme [time in minutes] [text]";

  // Implement the execute command
  exec(msg, reply): void {
    var args:string = msg.args();
    if(args.trim().length == 0){
      reply.text(this.usage);
      return;
    }
    if(!this.isNumber(args.substr(0, args.indexOf(' ')))){
      reply.text('The first parameter should be a number.');
      return;
    }
    var minutes:number = parseInt(args.substr(0, args.indexOf(' ')));
    var replytext = args.substr(args.indexOf(' ')+1);
    reply.markdown(`Reminding you in *${minutes} minutes* of *${replytext}*!`);
    this.addReminder(reply, minutes, replytext);
  }

  private addReminder(reply, minutes:number, text:String){
    setTimeout(() =>{reply.text(text)}, minutes * 60 * 1000);
  }

  private isNumber(n:any): boolean{
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}
