Template.StatementSingle.onCreated(function() {
	var self = this;
	self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleStatement', id);
	});
});

Template.StatementSingle.helpers({
	statement() {
    var id = FlowRouter.getParam('id');
		return Statements.findOne({_id: id})
	}
});
