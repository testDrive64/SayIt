Template.LastRead.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('statements');
	});
});

Template.LastRead.helpers({
	lastRead() {
		return Statements.find({favorites: true});
	}
});
