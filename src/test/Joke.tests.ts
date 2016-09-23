import { Joke } from '../Commands/Joke'
import { expect } from 'chai';

describe('Command: joke', ()=>{
  it('should tell us a joke', (done)=>{
    const joke = new Joke();
    
    var reply = {
      markdown: function(msg:string){
        expect(msg.length).to.be.above(0, "No joke returned");
        
        done();
      }
    };

    return joke.exec({},reply);
  });
});