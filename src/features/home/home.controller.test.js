const angular = require('angular');
require('angular-mocks/angular-mocks');

import home from './index';

describe('Controller: Home', function() {
  var $controller, ctrl, auth, words;

  beforeEach(angular.mock.module('app.home'));

  beforeEach(angular.mock.inject(function(_$controller_, _auth_, _words_) {
    auth = _auth_;
    words = _words_;
    $controller = _$controller_;
    ctrl = $controller('HomeController', {words: words, auth: auth});
  }));

  it('isAuth is set on startup', function() {
    spyOn(auth, 'isAuth');
    $controller('HomeController', {words: words, auth: auth});
    expect(auth.isAuth).toHaveBeenCalled();
  });
});