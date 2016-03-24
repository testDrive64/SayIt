Template.Statement.helpers({
  updateStatementId: function() {
    return this._id;
  }
});

Template.Statement.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleFavoritesItem', this._id, this.favorites);
  }
});
