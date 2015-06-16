require('bootstrap/dist/css/bootstrap.min.css');

import angular from 'angular';
import uirouter from 'angular-ui-router';

import home from './features/home/home.module';
import login from './features/login/login.module';

import routing from './app.config';

angular.module('app', [uirouter, home.name, login.name])
  .config(routing);