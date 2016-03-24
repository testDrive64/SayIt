Meteor.subscribe('statements');

Template.Statements.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('statements');
	});
});

Template.Recipes.helpers({
	statements: ()=> {
		return Statements.find({})
	}
});
