import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('authenticated');
  this.route('calculadora');

  this.route('people', function() {
    this.route('register');
    this.route('list');
    this.route('person',{ path:':id'});
  });
  this.route('author');
  this.route('home');
});

export default Router;
