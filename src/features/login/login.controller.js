'use strict';

export default class LoginController {
  constructor($state, auth) {
    this.$state = $state;
    this.authSvc = auth;
  }

  login() {
    this.authSvc.login(this.user.name, this.user.password).then(() => {
      this.$state.go('home');
    });
  }
}

LoginController.$inject = ['$state', 'auth'];