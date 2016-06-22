import { ICommand } from './ICommand';

export class Info implements ICommand {
  command = /info$/;
  help = "Displays bot information.";

  // Displays info
  exec(msg, reply): void {
    reply.markdown("*Source is available here:*\r\nhttps://github.com/guyspronck/node-telegram-bot-ts\r\n\r\n"
      + "Have an idea for a cool command? Check the [issue tracker](https://github.com/guyspronck/node-telegram-bot-ts/issues) if it has already been requested, or request is yourself!"
      + "\r\n_Please use labels to mark your issue/request!_");
  }
}
