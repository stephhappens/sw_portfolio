import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', function() {
    this.route('bulma');
    this.route('materialize');
    this.route('bootstrap');
  });

  });

export default Router;
