'use strict';

export default class HomeController {
  constructor(words, auth) {
    this.wordsSvc = words;
    this.authSvc = auth;

    this.isAuth = this.authSvc.isAuth();

    if (this.isAuth) {
      this.user = this.authSvc.getUser();
    }
  }

  getRandomWord() {
    this.wordsSvc.getWords().then((res) => {
      this.word = res.data;
    });
  }

  logout(event) {
    event.preventDefault();
    this.authSvc.logout();
    this.isAuth = false;
    this.user = null;
  }
}

HomeController.$inject = ['words', 'auth'];