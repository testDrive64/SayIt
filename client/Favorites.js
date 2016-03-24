Template.Favorites.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('statements');
	});
});

Template.Favorites.helpers({
	statements() {
		return Statements.find({favorites: true});
	}
});
