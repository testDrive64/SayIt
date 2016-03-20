/*Posts = new Mongo.Collection("posts");

if (Meteor.isClient) {
  // This code runs only on the client
  Template.body.helpers({
    posts: function() {
      return Posts.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-post": function (event) {
      event.preventDefault();

      var text = event.target.text.value;

      Posts.insert({
        text: text,
        createdAt: new Date()
      });

      event.target.text.value = "";
    },

    "submit .print": function (event) {
      event.preventDefault();
      var text = event.target.text.value;

      Posts.insert({
        text: text,
        createdAt: new Date()
      });

      event.target.text.value = "";
    }
  });
}
*/
