# Angular 1.x + ES6 + Webpack 2 Demo

This repository contains a demo for the [angular-webpack](https://github.com/preboot/angular-webpack).

## Usage

This repository needs a backend, refer to [GermanWords-koa](https://github.com/angular-tips/GermanWords-backend-koa) for further information in how to use it. Once you have it running:

```shell
$ git clone https://github.com/Foxandxss/GermanWords-ng1-webpack
$ cd GermanWords-ng1-webpack
$ npm install
$ npm start
```

Now you can navigate to http://localhost:8080 to see the app working.

The username and password for the demo is: `demo / 12345`.

## Tests

If you want to run the tests, do:

```shell
$ npm test
```

## Deploy

For deployment:

```shell
$ npm run build
```

That will generate a `/dist` folder where you can point your web server.
