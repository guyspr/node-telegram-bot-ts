/**
  * All commands to be used in the application should be listed here
  * Any configuration is also passed to commands from here
  */
import * as Dotenv from 'dotenv';
Dotenv.config(); // Load configuration
import { Database } from './Util/Database';

import { ICommand } from './Commands/ICommand';

import { Doekoe } from './Commands/Doekoe';
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
  }
}
  