Template.Statement.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleFavoritesItem', this._id, this.favorites);
  }
})
