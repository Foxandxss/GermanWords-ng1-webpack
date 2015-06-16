import wordsModule from './words.service';

describe('Service: auth', function() {
  var $httpBackend, $q, $rootScope, words;

  beforeEach(angular.mock.module(wordsModule));

  beforeEach(angular.mock.inject(function(_$httpBackend_, _$q_, _$rootScope_, _words_) {
    $httpBackend = _$httpBackend_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    words = _words_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets a random word with #getWords()', function() {
    var res = {
      data: {
        german: 'Haus'
      }
    };
    $httpBackend.expectGET('http://localhost:3001/api/random-word').respond(200, res);

    words.getWords();

    $httpBackend.flush();
  });
});