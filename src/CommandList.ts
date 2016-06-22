/**
  * All commands to be used in the application should be listed here
  */

import { ICommand } from './Commands/ICommand';

import { HelloWorld } from './Commands/HelloWorld';
import { Echo } from './Commands/Echo';
import { Forecast } from './Commands/Forecast';
import { Joke } from './Commands/Joke';
import { Doekoe } from './Commands/Doekoe';
import { Emote } from './Commands/Emote';

export let CommandList: ICommand[] = [
  new HelloWorld(),
  new Echo(),
  new Forecast(),
  new Joke(),
  new Doekoe(),
  new Emote()
];