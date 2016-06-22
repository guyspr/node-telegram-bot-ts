import * as Datastore from 'nedb';

// Define all models
export interface User{
  id: number;
  username?: string;
  firstname: string;
  lastname: string;
  msgcount: number;
}

export interface Chat{
  id: number;
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

  public UpdateStats(chat:Chat, user:User): void{
    // if (chat.type != 'group' || chat.type != 'supergroup'){
    //   return;
    // }
    this.db.stats.findOne({id: chat.id}, (err:Error, doc: Chat) => {
      if(doc == null){
        // Chat doesn't exist, create it.
        user.msgcount = 1;
        chat.users = [];
        chat.users.push(user);
        this.db.stats.insert(chat, (err:Error, doc:Chat) =>{
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

        this.db.stats.update<Chat>({id: chat.id}, doc);
      }
    });
  }
}

