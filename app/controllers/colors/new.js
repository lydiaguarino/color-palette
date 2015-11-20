import Ember from 'ember';

export default Ember.Controller.extend({
  hexcode: null,
  name: null,
  resetForm: function(){
    this.setProperties({
      hexcode: null,
      name: null
    });
  },
  actions: {
    create: function(){
      var colorData = {
        hexcode: this.get('hexcode'),
        name: this.get('hexcode')
      };

      if(this.get('hexcode')){
        var newColor = this.store.createRecord('color', colorData );
        newColor.save();
        this.resetForm();
        this.transitionToRoute('colors.index');
      }
    }
  }
});
