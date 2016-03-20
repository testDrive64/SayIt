Meteor.publish('statements', function() {
  return Statements.find({author: this.userId});
})
