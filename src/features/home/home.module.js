'use strict';

import angular from 'angular';

import routing from './home.routes';
import HomeController from './home.controller';
import wordsService from '../../services/words.service';
import authService from '../../services/auth.service';

export default angular.module('app.home', [wordsService, authService])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;