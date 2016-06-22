import * as Datastore from 'nedb';

// Define all models
export interface User{
  id: number;
  username?: string;
  firstname: string;
  lastname: string;
  name: string;
  msgcount: number;
}

export interface Chat{
  id: number;
  name: string;
  type: string;
  users: User[];
}

export class Database {
  db: {
    stats:Datastore
  };

  constructor() {
    this.db = {
      stats: new Datastore({
        filename: 'dist/data/stats.db'
      })
    };

    this.db.stats.loadDatabase();
  }

  // Get a string with statistics
  public GetStats(chat:Chat, callback: (stats:String) => void): void{
    if (chat.type != 'group' && chat.type != 'supergroup'){
      callback("Stats are only available in (super)groups, get some friends!");
      return;
    }
    this.db.stats.findOne({id: chat.id}, (err:Error, doc: Chat) => {
      if(doc == null){
        callback("No stats available.");
      }else{
        // Sort by msgcount
        doc.users.sort(function(a,b){
          return b.msgcount - a.msgcount;
        });

        var response = `Stats for *${doc.name}*:\r\n`;
        var sum = 0;
        for(var i = 0; i < doc.users.length; i++){
          response += `\r\n ${doc.users[i].name} (${doc.users[i].username}): *${doc.users[i].msgcount}*`;
          sum += doc.users[i].msgcount
        }

        response += `\r\n\r\nTotal messages: *${sum}*`;
        callback(response);
      }
    });
  }

  // Update the chat statistics
  public UpdateStats(chat:Chat, user:User): void{
    if (chat.type != 'group' && chat.type != 'supergroup'){
      return;
    }
    this.db.stats.findOne({id: chat.id}, (err:Error, doc: Chat) => {
      if(doc == null){
        // Chat doesn't exist, create it.
        user.msgcount = 1;
        chat.users = [];
        chat.users.push(user);
        this.db.stats.insert(chat, (err:Error, doc:Chat) => {
          if(err){
            // Something happened
            console.log(err.message);
          }
        });
      }else{
        var foundUser: boolean = false;
        for(var i = 0; i < doc.users.length; i++){
          foundUser = true;
          // Store new message count and overwrite
          user.msgcount = doc.users[i].msgcount + 1;
          doc.users[i] = user;
        }

        // Add if user doesn't exist
        if(!foundUser){
          user.msgcount = 1;
          doc.users.push(user);
        }

        this.db.stats.update<Chat>({id: chat.id}, doc);
      }
    });
  }
}

