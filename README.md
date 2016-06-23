# Node Telegram Bot Typescript 

[![Build Status](https://travis-ci.org/guyspronck/node-telegram-bot-ts.svg?branch=master)](https://travis-ci.org/guyspronck/node-telegram-bot-ts) [![Dependency Status](https://david-dm.org/guyspronck/node-telegram-bot-ts.svg)](https://david-dm.org/guyspronck/node-telegram-bot-ts) [![devDependency Status](https://david-dm.org/guyspronck/node-telegram-bot-ts/dev-status.svg)](https://david-dm.org/guyspronck/node-telegram-bot-ts#info=devDependencies)

This repo contains a telegram bot written in typescript.

## Configuration

Create a `.env` file in the root directory of this repo containing the following:

```
BOT_TOKEN=abcdefghijklmnopqrstuvwxyz1234567890
FORECAST_API=abcdefghijklmnopqrstuvwxyz1234567890
GEOCODE_PROVIDER=google
GEOCODE_APIKEY=abcdefghijklmnopqrstuvwxyz1234567890
SUPERUSER=12345678
```

Make sure to fill in all parameters.

## Running

Make sure the TypeScript compiler is installed using `npm install -g typescript`.

This project make use of [Typings](https://github.com/typings/typings/) to install typings. Install it using `npm install -g typings` and then run `typings install` to install the required typings.

When TypeScript is installed use `npm install` to install required modules and use `npm start` to run the bot (automatically compiles and runs the bot).

