'use strict';

routing.$inject = ['$urlRouterProvider'];

export default function routing($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}