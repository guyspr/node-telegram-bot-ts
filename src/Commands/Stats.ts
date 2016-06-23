import { ICommand } from './ICommand';
import { Database, Chat } from '../Util/Database';

export class Stats implements ICommand {
    command = /stats$/;
    help = "Displays chat stats.";
    db:Database;

    constructor(db:Database) {
      this.db = db;
    }

    // Displays chat statistics
    exec(msg, reply):void {
      this.db.GetStats(<Chat>msg.chat, (stats:String) => {
        reply.html(stats);
      });
    }
}
