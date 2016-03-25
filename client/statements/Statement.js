Template.Statement.helpers({
  updateStatementId: function() {
    return this._id;
  }
});

Template.Statement.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleFavoritesItem', this._id, this.favorites);
  },
  'click .fa-trash': function() {
    Meteor.call('deleteRecipe');
  },
  'click .fa-pencil': function() {
    Session.set('editMode', !Session.get('editMode'));
  }
});
