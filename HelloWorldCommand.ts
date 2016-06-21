import { ICommand } from './ICommand';

export class HelloWorldCommand implements ICommand {
    command = /helloworld/;
    help = "Displays 'Hello world!'";
    exec(msg, reply):void {
        reply.text("Hello world!");
    }
}
