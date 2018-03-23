import Controller from '@ember/controller';
import Ember from 'ember';
import EmberValidations from 'ember-validations';
/*
export default Controller.extend({
});*/

export default Ember.Controller.extend(EmberValidations, {
 
    actions: {
      register(){
       let {userName, password,salary,gender} = this.getProperties('userName', 'password','salary','gender');
        if(userName == null){
          this.flashMessage('success', 'Content saved!');
        }
        
        
      }
    },
  });
  
