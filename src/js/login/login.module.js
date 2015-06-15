'use strict';

import angular from 'angular';

import routing from './login.routes';
import LoginController from './login.controller';
import authService from '../services/auth.service';

export default angular.module('app.login', [authService])
  .config(routing)
  .controller('LoginController', LoginController)
  .name;