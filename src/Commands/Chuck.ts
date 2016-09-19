import { ICommand } from './ICommand';
import * as Request from 'request';

interface ChuckJoke {
  type: string;
  value: {
    id: number;
    joke: string;
  }
}

//interface Joke
export class Chuck implements ICommand {
  command = /chuck/;
  help = "Tells a Chuck Norris joke.";
  url = "http://api.icndb.com/jokes/random";

  // Implement the execute command
  exec(msg, reply): void {
    Request(this.url, function(error, response, body) {
      var joke: ChuckJoke = <ChuckJoke>JSON.parse(body);
      if (joke.type == 'success') {
        reply.text(joke.value.joke);
      }else{
        reply.text("Chuck Norris denied our request.");
      }
    });
  }
}
