Template.Statements.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('statements');
	});
});

Template.Statements.helpers({
	statements() {
		return Statements.find({})
	}
});

Template.Statements.events({
	'click .new-statement': function() {
		Session.set('newStatement', true);
	}
});
