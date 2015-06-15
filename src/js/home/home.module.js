'use strict';

import angular from 'angular';

import routing from './home.routes';

export default angular.module('home', [])
  .config(routing)
  .name;