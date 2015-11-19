import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('colors', function() {
    this.route('new');
    this.route('edit', { path: '/:color_id' });
  });
});

export default Router;
