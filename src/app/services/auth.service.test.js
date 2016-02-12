import authModule from './auth.service';

describe('Service: auth', function() {
  var $http, $q, $rootScope, auth;

  beforeEach(angular.mock.module(authModule));

  beforeEach(angular.mock.inject(function(_$http_, _$q_, _$rootScope_, _auth_) {
    $http = _$http_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    auth = _auth_;
  }));

  it('#isAuth will return a boolean based on jwt token', function() {
    auth.token = 'foo';

    expect(auth.isAuth()).toBeTruthy();

    auth.token = null;

    expect(auth.isAuth()).toBeFalsy();
  });

  it('#getUser returns a decoded user', function() {
    auth.user = 'someuser';

    expect(auth.getUser()).toBe('someuser');
  });

  it('#login puts a new token in localStorage', function() {
    var res = {
      data: {
        id_token: 'foo'
      }
    };

    spyOn($http, 'post').and.returnValue($q.when(res));
    spyOn(localStorage, 'setItem');

    auth.login('user', 'pass');

    $rootScope.$digest();

    expect(localStorage.setItem).toHaveBeenCalledWith('jwt', 'foo');
    expect(auth.token).toBe('foo');
  });

  it('#logout reset everything', function() {
    spyOn(localStorage, 'removeItem');

    auth.logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('jwt');
    expect(auth.token).toBeNull();
    expect(auth.user).toBeNull();
  });
});