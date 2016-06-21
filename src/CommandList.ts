import { ICommand } from './ICommand';
import { HelloWorldCommand } from './HelloWorldCommand';

export let CommandList: ICommand[] = [
  new HelloWorldCommand()
];