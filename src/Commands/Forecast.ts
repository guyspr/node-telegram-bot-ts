import { ICommand } from './ICommand';
import * as Request from 'request';

interface Weather{
  time: number;
  summary: string;
  temperature: number;
  temperatureMin: number;
  temperatureMax: number;
}

export class Forecast implements ICommand {
  command = /forecast$/;
  help = "Shows the forecast for the given location.";
  usage = "Usage: /forecast [location]";
  geocoder: any;

  url = "https://api.darksky.net/forecast/";
  apikey: string;

  constructor(forecastApi:string, geocodeProvider: string, geocodeApikey?: string) {
    this.apikey = forecastApi;
    this.geocoder = require('node-geocoder')(geocodeProvider, 'https', { apiKey: geocodeApikey });
  }

  // Gets a forecast using lat, long
  private getForecast(lat:Float32Array, long:Float32Array, city:string, country:string, callback: (msg: string) => any): void{
    var url = `${this.url}${this.apikey}/${lat},${long}?units=si`;
    Request(url, function(error, response, body) {
      var parsed = JSON.parse(body);
      var weatherHourly:Weather[] = <Weather[]>parsed.hourly.data;
      var weatherDaily:Weather[] = <Weather[]>parsed.daily.data;
      var currently:Weather = <Weather>parsed.currently;
      var forecastString:string = `In *${city}, ${country}* it is *${currently.summary}* with a temperature of *${currently.temperature} °C*. \r\n\r\nHere is a forecast for the following 3 hours:`;
      for(var i = 1; i < 4; i++){
        var date = new Date(weatherHourly[i].time * 1000);
        forecastString += `\r\n*${date.toLocaleTimeString('en-GB', { hour12: false})}* - ${weatherHourly[i].summary} with a temperature of ${weatherHourly[i].temperature} °C`;
      }

      forecastString += `\r\n\r\nAnd for the following few days:`

      for(var i = 1; i < 4; i++){
        var date = new Date(weatherDaily[i].time * 1000);
        forecastString += `\r\n*${date.toLocaleDateString('en-GB', {weekday: 'long'})}* - ${weatherDaily[i].summary} (min *${weatherDaily[i].temperatureMin} °C*, max *${weatherDaily[i].temperatureMax} °C*)`;
      }
      callback(forecastString);
    });
  }

  // Implement the execute command
  exec(msg, reply): void {
    var args:string = msg.args();
    if(args.trim().length == 0){
      reply.text(this.usage);
      return;
    }

    var res = this.geocoder.geocode(args, (err, res) =>{
      if(err){
        return;
      }
      if(res.length == 0){
        reply.text("Cannot find the place you are looking for.");
        return;
      }      
      this.getForecast(res[0].latitude,res[0].longitude, res[0].city, res[0].country, function(str){
        reply.markdown(str);
      });
    });
  }
}
