/**
  * All commands to be used in the application should be listed here
  */

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
  new Forecast(),
  new HelloWorld(),
  new Joke()
];