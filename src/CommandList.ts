/**
  * All commands to be used in the application should be listed here
  * Any configuration is also passed to commands from here
  */
import * as Dotenv from 'dotenv';
if (process.env.ENVIRONMENT != 'test') { // Do not load in test env (Travis)
  Dotenv.config(); // Load .env file for configuration
}
import { Database } from './Util/Database';

import { ICommand } from './Commands/ICommand';

import { Cat } from './Commands/Cat';
import { Chuck } from './Commands/Chuck';
import { Doekoe } from './Commands/Doekoe';
import { Help } from './Commands/Help';
import { Echo } from './Commands/Echo';
import { Emote } from './Commands/Emote';
import { Forecast } from './Commands/Forecast';
import { HelloWorld } from './Commands/HelloWorld';
import { Info } from './Commands/Info';
import { Isup } from './Commands/Isup';
import { Joke } from './Commands/Joke';
import { Stats } from './Commands/Stats';

export class CommandList{
  public list: ICommand[];
  constructor(db:Database){
    this.list = [
      new Cat(),
      new Chuck(),
      new Doekoe(),
      new Echo(),
      new Emote(),
      new Forecast(process.env.FORECAST_API, process.env.GEOCODE_PROVIDER, process.env.GEOCODE_APIKEY),
      new HelloWorld(),
      new Info(),
      new Isup(),
      new Joke(),
      new Stats(db)
    ];
    // Add help command as last, needs list to create help text.
    this.list.push(new Help(this.list));
  }
}
  