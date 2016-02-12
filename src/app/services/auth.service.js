'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import jwtDecode from 'jwt-decode';

class Auth {
  constructor($http) {
    this.$http = $http;
    this.token = localStorage.getItem('jwt');
    this.user  = this.token && jwtDecode(this.token);
  }

  isAuth() {
    return !!this.token;
  }

  getUser() {
    return this.user;
  }

  login(username, password) {
    return this.$http.post('http://localhost:3001/sessions/create',
                      JSON.stringify({username, password})
    ).then((res) => {
      this.token = res.data.id_token;
      localStorage.setItem('jwt', this.token);
    });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.token = null;
    this.user = null;
  }
}

Auth.$inject = ['$http'];

class AuthInterceptor {
  request(config) {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  }
}

config.$inject = ['$httpProvider'];

function config($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
}

export default angular.module('services.auth', [uirouter])
  .service('auth', Auth)
  .service('authInterceptor', AuthInterceptor)
  .config(config)
  .name;