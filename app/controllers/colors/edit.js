import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update: function(){
      if(this.get('model.hexcode')){
        var color = this.get('model');
        color.save();
        this.transitionToRoute('colors.index');
      }
    },
    destroy: function(){
      var color = this.get('model');
      color.destroyRecord();
      color.save();
      this.transitionToRoute('colors.index');
    }
  }
});
