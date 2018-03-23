import Controller from '@ember/controller';
import Ember from 'ember';
//import EmberValidations from 'ember-validations';
import displayFlashErrors from '../utils/display-flash-errors';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

/*
export default Controller.extend({
});*/

export default Controller.extend( {
  showErrors: false,
  mock: service('mock-service'),

  actions: {
    register() {
      let { userName, password, salary, gender } = this.getProperties('userName', 'password', 'salary', 'gender');
      if (userName == null || password == null || salary == null || gender == null) {
        this.get('flashMessages').danger('NINGUN CAMPO PUEDE ESTAR VACIO');
      }
      else if (isNaN(salary)) {
        this.get('flashMessages').danger('EL SALARIO DEBE SER NUMERICO');
      }
      else if (salary < 0) {
        this.get('flashMessages').danger('EL SALARIO NO PUEDE SER NEGATIVO');
      }
      else if (gender.localeCompare('M')!==0 && gender.localeCompare('F')!=0 ) {
        this.get('flashMessages').success('EL GENERO DEBE SER M Ó F');
      }
      else {
        var person = {
          userName: userName,
          password : password,
          salary: salary,
          gender: gender
        }
        this.get('mock').updatePeople(person);
        this.get('flashMessages').success('PERSONA REGISTRADA SATISFACTORIAMENTE');
        this.set('userName',"");
        this.set('password',"");
        this.set('salary',"");
        this.set('gender',"");
      }


    }
  },
});
