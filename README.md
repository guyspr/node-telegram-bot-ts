# Node Telegram Bot Typescript

This repo contains a telegram bot written in typescript.

## Configuration

Create a `config.ts` file in the `src` directory of this repo containing the following:

```typescript
export class Config {
  static token: string = "TOKEN";
  static forecast: string = "FORECAST";

  static geocode = {
    provider: "PROVIDER",
    apiKey: "OPTIONAL KEY"
  };

  static superusers: number[] = [];
};
```

Make sure to fill in all parameters.

## Running

Make sure the TypeScript compiler is installed using `npm install -g typescript`.

This project make use of [Typings](https://github.com/typings/typings/) to install typings. Install it using `npm install -g typings` and then run `typings install` to install the required typings.

When TypeScript is installed use `npm install` to install required modules and use `npm start` to run the bot (automatically compiles and runs the bot).

