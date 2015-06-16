'use strict';

import angular from 'angular';

class Words {
  constructor($http) {
    this.$http = $http;
  }

  getWords() {
    return this.$http.get('http://localhost:3001/api/random-word');
  }
}

Words.$inject = ['$http'];

export default angular.module('services.words', [])
  .service('words', Words)
  .name;