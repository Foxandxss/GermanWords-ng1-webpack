import angular from 'angular';
import uirouter from 'angular-ui-router';

import home from './home/home.module';
import routing from './app.config';

angular.module('app', [uirouter, home])
  .config(routing);