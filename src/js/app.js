require('bootstrap/dist/css/bootstrap.min.css');

import angular from 'angular';
import uirouter from 'angular-ui-router';

import home from './home/home.module';
import login from './login/login.module';

import routing from './app.config';

angular.module('app', [uirouter, home, login])
  .config(routing);