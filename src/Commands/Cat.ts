import { ICommand } from './ICommand';
import * as Request from 'request';

interface CatFact {
  facts: string[];
  success: string;
}

export class Cat implements ICommand {
  command = /cat$/;
  help = "Returns a random cat fact.";
  url = "http://catfacts-api.appspot.com/api/facts";

  // Displays cat fact
  exec(msg, reply): void {
    Request(this.url, function(error, response, body) {
      var fact: CatFact = <CatFact>JSON.parse(body);
      if (fact.success == 'true') {
        reply.text(fact.facts[0]);
      }else{
        reply.text("Couldn't get a cat fact 3:");
      }
    });
  }
}
