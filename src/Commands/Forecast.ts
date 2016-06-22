import { ICommand } from './ICommand';
import { Config } from '../config';

var Fc = require('forecast');
var geocoder = require('node-geocoder')(Config.geocode.provider, 'https', {apiKey: Config.geocode.apiKey});

export class Forecast implements ICommand {
  command = /forecast$/;
  help = "Shows the forecast for the given location.";
  usage = "Usage: /forecast [location]";

  fc = new Fc({
    service: 'forecast.io',
    key: Config.forecast,
    units: 'celcius', // Only the first letter is parsed 
    cache: true,      // Cache API requests? 
    ttl: {            // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/ 
      minutes: 27,
      seconds: 45
    }
  });

  // Gets a forecast using lat, long
  private getForecast(lat:Float32Array, long:Float32Array, city:string, country:string, callback: (msg: string) => any): void{
    this.fc.get([lat,long], function(err, weather){
      if(err){
        callback("Could not find weather data for this location.");
      }
      var respString = `The weather in ${city}, ${country} is ${weather.currently.summary} with a temperature of ${weather.currently.temperature} °C`;
      callback(respString);
    })
  }

  // Implement the execute command
  exec(msg, reply): void {
    var args:string = msg.args();
    if(args.trim().length == 0){
      reply.text(this.usage);
      return;
    }

    var res = geocoder.geocode(args, (err, res) =>{
      if(err){
        return;
      }
      if(res.length == 0){
        reply.text("Cannot find the place you are looking for.");
        return;
      }      
      this.getForecast(res[0].latitude,res[0].longitude, res[0].city, res[0].country, function(str){
        reply.text(str);
      });
    });
  }
}
