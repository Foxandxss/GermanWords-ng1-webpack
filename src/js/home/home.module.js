'use strict';

import angular from 'angular';

import routing from './home.routes';
import Home from './home.controller';

export default angular.module('home', [])
  .config(routing)
  .controller('Home', Home)
  .name;