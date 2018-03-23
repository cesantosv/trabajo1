import Controller from '@ember/controller';
import Ember from 'ember';
import EmberValidations from 'ember-validations';
import displayFlashErrors from '../utils/display-flash-errors';
import { inject as service } from '@ember/service';

/*
export default Controller.extend({

});*/

export default Controller.extend(EmberValidations, {
  sessionservice: service('sing-service'),
  usersService: service('mock-service'),
  showErrors: false,
  //   session: Ember.inject.service(),
  validations: {
    userName: {
      presence: true
    },
    password: {
      presence: true,
      length: { minimum: 6 },

    }
  },
  //   session: Ember.inject.service(),
  actions: {
    login() {
      showErrors: false;

      var users = this.get('usersService').getUsers();
      let { userName, password } = this.getProperties('userName', 'password');

      var search = users.findBy('usuario', userName);
      if (userName == null) {
        this.get('flashMessages').danger('EL CAMPO USUARIO NO PUEDE SER VACIO');
        if (password == null) {
          this.get('flashMessages').danger('EL CAMPO CONTRASEÑA NO PUEDE SER VACIO');
        }
      } if (!search || search.contrasena !== password) {
        this.get('flashMessages').danger('USUARIO O CONTRASEÑA !');
      } else {

        this.get('sessionservice').setControlSession(true, userName);
        localStorage.setItem("controlSession", true);
        localStorage.setItem("userName", userName);
        this.set('userName', "");
        this.set('password', "");
        this.transitionToRoute('home');

      }

    },
  }
}
);


