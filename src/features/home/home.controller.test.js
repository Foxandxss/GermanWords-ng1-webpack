import home from './index';

describe('Controller: Home', function() {
  var $rootScope, $controller, $q, ctrl, auth, words;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_, _$q_, _$rootScope_, _auth_, _words_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
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

  it('grabs the user info if the user is authenticated', function() {
    spyOn(auth, 'isAuth').and.returnValue(true);
    spyOn(auth, 'getUser');
    $controller('HomeController', {words: words, auth: auth});
    expect(auth.getUser).toHaveBeenCalled();
  });

  it('gets a random word with #getRandomWord', function() {
    var res = {
      data: {
        german: 'Haus'
      }
    };
    spyOn(words, 'getWords').and.returnValue($q.when(res));

    ctrl.getRandomWord();

    $rootScope.$digest();

    expect(ctrl.word).toEqual(res.data);
  });

  it('it resets everything on #logout', function() {
    spyOn(auth, 'logout');

    var event = {
      preventDefault: angular.noop
    };

    ctrl.logout(event);

    expect(ctrl.isAuth).toBeFalsy();
    expect(ctrl.user).toBeNull();
    expect(auth.logout).toHaveBeenCalled();
  });
});