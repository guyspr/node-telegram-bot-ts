/**
  * All commands to be used in the application should be listed here
  * Any configuration is also passed to commands from here
  */
import * as Dotenv from 'dotenv';
Dotenv.config(); // Load configuration

import { ICommand } from './Commands/ICommand';

import { Doekoe } from './Commands/Doekoe';
import { Echo } from './Commands/Echo';
import { Emote } from './Commands/Emote';
import { Forecast } from './Commands/Forecast';
import { HelloWorld } from './Commands/HelloWorld';
import { Joke } from './Commands/Joke';

export let CommandList: ICommand[] = [
  new Doekoe(),
  new Echo(),
  new Emote(),
  new Forecast(process.env.FORECAST_API, process.env.GEOCODE_PROVIDER, process.env.GEOCODE_APIKEY),
  new HelloWorld(),
  new Joke()
];