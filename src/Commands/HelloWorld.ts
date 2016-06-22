import { ICommand } from './ICommand';

export class HelloWorld implements ICommand {
    command = /helloworld$/;
    help = "Displays 'Hello world!'";

    // Displays hello world
    exec(msg, reply):void {
        reply.text("Hello world!");
    }
}
