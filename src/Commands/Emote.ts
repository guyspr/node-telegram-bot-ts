import { ICommand } from './ICommand';
import * as Cool from 'cool-ascii-faces';

export class Emote implements ICommand {
  command = /emote$/;
  help = "Displays an emote.";

  // Displays an emote
  exec(msg, reply): void {
    reply.text(Cool());
  }
}
