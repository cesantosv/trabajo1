import Route from '@ember/routing/route';

export default Ember.Route.extend({
    model: function() {
      return this.store.findAll('post');
    }
  });
  
