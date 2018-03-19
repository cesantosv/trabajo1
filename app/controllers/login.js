import Controller from '@ember/controller';
import Ember from 'ember';
import EmberValidations from 'ember-validations';
import displayFlashErrors from '../utils/display-flash-errors';

/*
export default Controller.extend({

});*/

export default Ember.Controller.extend(EmberValidations, {
    showErrors: false,
   // session: Ember.inject.service(),
    validations: {
      userName: {
        presence: true
      },
      password: {
        presence: true,
        length: {minimum: 6}
      }
    },
    session: Ember.inject.service(),
    actions: {
      login(){/*
        let { userName, password } = this.getProperties('userName', 'password');
        this.validate().then(()=>{
          this.get("session").login(userName, password).then(()=>{
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
     // let { userName, password } = this.getProperties('userName', 'password');
    this.get('session').login(this.get('userName'),this.get('password')).then(()=>{
    alert('Entro');
    this.transitionToRoute('login');
  },(error)=>{
    alert('Error' ); 
  });
       
       
    },
    transitionToPreviousRoute(){
      var previousTransition = this.get('previousTransition');
      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        // Default back to homepage
        this.transitionToRoute('index');
      }
    },
  }
});


