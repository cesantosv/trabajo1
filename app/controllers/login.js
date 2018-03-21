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
        length: {minimum: 6},
        
      }
    },
 //   session: Ember.inject.service(),
    actions: {
      login(){
        showErrors: false;
        /*
        let { userName, password } = this.getProperties('userName', 'password');
        this.validate().then(()=>{
          this.get("sessionservice").login(userName, password).then(()=>{
            this.get('flashMessages').success('You have signed in succesfully');
            this.transitionToPreviousRoute();
          }).catch((reason)=>{
            this.set('showErrors',true);  
            this.get('flashMessages').danger(reason);
          });
        }).catch((errors)=>{
          displayFlashErrors(errors, this.get('flashMessages'));
         //console.log('Contraseña incorrecta');
        });
      }*/
      var users = this.get('usersService').getUsers();
      let { userName, password } = this.getProperties('userName', 'password');

      var search = users.findBy('usuario',userName);
      if(userName == null){
        //  this.set('model.error',"No se han ingresado datos");
        this.get('flashMessages').danger('user vacios');
      if(password == null){
        this.set('password','1234567');
        this.get('flashMessages').danger('contraseña vacios');
      }
      } if(!search || search.contrasena !== password){
          this.get('flashMessages').danger('Usuario o Contraseña Incorrecta !');
      } else {
          this.get('sessionservice').setControlSession(true,userName);
          localStorage.setItem("controlSession", true);
          localStorage.setItem("userName", userName);
          this.set('userName',"");
          this.set('password',"");
       //   this.transitionToRoute('calculadora');
       //  this.transitionToPreviousRoute();
      }
       
    },
    transitionToPreviousRoute(){
      var previousTransition = this.get('previousTransition');
      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        // Default back to homepage
        this.transitionToRoute('login');
      }
    },
  }
}
);


