import { Cat } from '../Commands/Cat'
import { expect } from 'chai';

describe('Command: cat', ()=>{
  it('should give a non empty string', (done)=>{
    var cat = new Cat();
    var reply = {
      text: function(msg:string){
        expect(msg.length).to.be.above(0);

        done();
      }
    };
    
    cat.exec({},reply);
  });
});