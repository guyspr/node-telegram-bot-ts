import { Echo } from '../Commands/Echo'
import { expect } from 'chai';

describe('Command: echo', () => {
  var echo:Echo = new Echo();
  it('should return the usage string', (done) => {
    var reply = {
      text: function(msg: string) {
        expect(msg).to.be.equal(echo.usage);
        
        done();
      }
    };
    echo.exec({
      args: function(){
        return "";
      }
    }, reply);
  });

  it('should return the echoString', (done) => {
    var echoString = "This should be returned.";

    var reply = {
      text: function(msg: string) {
        expect(msg).to.be.equal(echoString);

        done();
      }
    };
    echo.exec({
      args: function() {
        return echoString;
      }
    }, reply);
  });
});