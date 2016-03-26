Template.OpenList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('statements');
  });
});

Template.OpenList.helpers({
  statements() {
    return Statements.find({open: true});
  }
});
