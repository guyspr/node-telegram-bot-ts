import * as Datastore from 'nedb';

// Define all models
interface User{
  id: number;
  username?: string;
  firstname: string;
  lastname: string;
  msgcount: number;
}

interface Chat{
  id: number;
  users: User[];
}

export class Database {
  db: Datastore[];
  constructor(argument) {
    this.db['chats'] = new Datastore({
      filename: 'data/chats.db'
    });
  }

  public UpdateStats(chat:Chat, user:User): void{

  }
}

