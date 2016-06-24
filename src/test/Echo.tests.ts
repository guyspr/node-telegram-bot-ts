import { Echo } from '../Commands/Echo'
import chai = require('chai');

describe('Command: echo', () => {
  var echo:Echo = new Echo();
  it('should return the usage string', () => {
    var reply = {
      text: function(msg: string) {
        chai.assert.equal(echo.usage, msg);
      }
    };
    echo.exec({
      args: function(){
        return "";
      }
    }, reply);
  });

  it('should return the echoString', () => {
    var echoString = "This should be returned.";
    var reply = {
      text: function(msg: string) {
        chai.assert.equal(echoString, msg);
      }
    };
    echo.exec({
      args: function() {
        return echoString;
      }
    }, reply);
  });
});