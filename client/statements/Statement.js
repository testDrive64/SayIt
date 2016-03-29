Template.Statement.onCreated(function(){
  this.editMode = new ReactiveVar(false);
});

Template.Statement.helpers({
  updateStatementId: function() {
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  }
});

Template.Statement.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleFavoritesItem', this._id, this.favorites);
  },
  'click .fa-trash': function() {
    Meteor.call('deleteStatement', this._id);
  },
  'click .fa-pencil': function(event, template) {
    template.editMode.set(!template.editMode.get());      // Idee um meine schon gelesen seite einzufügen!!!
  },

  'click .fa-publish': function(event, template) {
    
  }
});
