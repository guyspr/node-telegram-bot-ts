/**
  * All commands to be used in the application should be listed here
  */

import { ICommand } from './Commands/ICommand';
import { HelloWorld } from './Commands/HelloWorld';
import { Echo } from './Commands/Echo';
import { Forecast } from './Commands/Forecast';
import { Joke } from './Commands/Joke';

export let CommandList: ICommand[] = [
  new HelloWorld(),
  new Echo(),
  new Forecast(),
  new Joke()
];