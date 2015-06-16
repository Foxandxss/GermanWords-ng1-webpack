require('bootstrap/dist/css/bootstrap.min.css');

import angular from 'angular';
import uirouter from 'angular-ui-router';

import home from './features/home/index';
import login from './features/login/index';

import routing from './app.config';

angular.module('app', [uirouter, home, login])
  .config(routing);