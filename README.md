# Angular 1.x + ES6 + Webpack Demo

This repository contains a demo for the [angular-webpack-workflow](https://github.com/Foxandxss/angular-webpack-workflow).

## Usage

This repository needs a backend, refer to [GermanWords-koa](https://github.com/angular-tips/GermanWords-backend-koa) for further information in how to use it. Once you have it running:

```shell
$ git clone https://github.com/Foxandxss/GermanWords-ng1-webpack
$ cd GermanWords-ng-webpack
$ npm install
$ npm run dev
```

Now you can navigate to http://localhost:8080 to see the app working.

The username and password for the demo is: `demo / 12345`.

## Tests

If you want to run the tests, do:

```shell
$ npm run test
```

## Deploy

For deployment:

```shell
$ npm run build
```

That will generate a `/dist` folder where you can point your web server.