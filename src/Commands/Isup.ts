import { ICommand } from './ICommand';
import * as Request from 'request';

export class Isup implements ICommand {
  command = /isup$/;
  help = "Checks if a website is up/down.";
  usage = "Usage: /isup [url]";


  private IsUp(url: string, callback: (isup: boolean) => void): void {
    var SERVER_URL = 'http://isup.me/';
    Request(SERVER_URL + url, function(error, response, body) {
      callback(body.indexOf('It\'s just you') !== -1);
    });
  }

  // Displays hello world
  exec(msg, reply): void {
    var args: string = msg.args();
    if (args.trim().length == 0) {
      reply.text(this.usage);
      return;
    }

    this.IsUp(args, (isup: boolean) => {
      if(isup){
        reply.markdown(`*${args}* looks *up* from here.`);
      }else{
        reply.markdown(`*${args}* looks *down* from here.`);
      }
    });
  }
}
