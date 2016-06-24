import { Cat } from '../Commands/Cat'
import chai = require('chai');

describe('Command: cat', ()=>{
  it('should give a non empty string', ()=>{
    var cat = new Cat();
    var reply = {
      text: function(msg:string){
        chai.assert.equal(true, msg.length > 0);
      }
    };
    
    cat.exec({},reply);
  });
});