Meteor.publish('statements', function() {
  return Statements.find({author: this.userId});
});

Meteor.publish('singleStatement', function(id) {
  check(id,String);
  return Statements.find({_id:id});
})
