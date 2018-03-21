import Mixin from '@ember/object/mixin';

export default Mixin.create({
    session: Ember.inject.service(),
    beforeModel(transition){
    if(!this.get('session.isLoggedIn')){
      var loginController = this.controllerFor('login');
      loginController.set('previousTransition', transition);
      this.transitionTo('login');
    }
  }
});
