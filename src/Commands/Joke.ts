import { ICommand } from './ICommand';
import * as Request from 'request';

// Format for the incoming jokes
interface JokeObj{
  title: string;
  selftext?: string;
}

export class Joke implements ICommand {
  command = /joke$/;
  help = "Tells a joke from /r/jokes";
  usage = "Usage: /joke";

  // Implement the execute command
  exec(msg, reply): void {
    this.getJoke((result:string) => {
      reply.markdown(result);
    }); 
  }

  // Gets a joke from reddit and pushes it to the callback
  private getJoke(callback: (result:string) => void): void{
    var url = 'https://www.reddit.com/r/jokes/random.json';
    Request(url, function(error, response, body){
      var parsed = JSON.parse(body).data.children[0];
      var joke = <JokeObj>parsed.data;
      callback(`*${joke.title}*\r\n${joke.selftext}`);
    });
  }
}
