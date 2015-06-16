import login from './index';

describe('Controller: Login', function() {
  var $rootScope, $controller, $q, $state, ctrl, auth;

  beforeEach(angular.mock.module(login.name));

  beforeEach(angular.mock.inject(function(_$controller_, _$q_, _$rootScope_, _$state_, _auth_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
    $state = _$state_;
    auth = _auth_;
    $controller = _$controller_;
    ctrl = $controller('LoginController', {auth: auth});
  }));

  it('#login redirects home', function() {
    spyOn(auth, 'login').and.returnValue($q.when());
    spyOn($state, 'go');

    ctrl.user = {
      name: 'user',
      pass: 'name'
    };

    ctrl.login();

    $rootScope.$digest();

    expect($state.go).toHaveBeenCalledWith('home');
  });
});