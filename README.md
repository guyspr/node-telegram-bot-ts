# Node Telegram Bot Typescript

This repo contains a telegram bot written in typescript.

## Configuration

Create a `config.json` file in the root directory of this repo containing the following:

```json
{
  "token": "BOT_TOKEN",
  "forecast": "FORECAST_API_KEY",

  "geocode":{
    "provider": "GEOCODE_PROVIDER",
    "apiKey": "OPTIONAL_API_KEY"
  },

  "superusers": []
}
```

Make sure to fill in all parameters.

## Running

Make sure the TypeScript compiler is installed using `npm install -g typescript`.

When TypeScript is installed use `npm install` to install required modules and use `npm start` to run the bot (automatically compiles and runs the bot).

