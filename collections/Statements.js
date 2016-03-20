Statements = new Mongo.Collection('statements');


Statements.allow({
  insert: function(userId, doc) {
    return !!userId; // who is allow to writing a statements
                      // change these at any time to if somebody is not sign in then he is named anonymous
                      // but she or he can write what he want
  }
});

Story = new SimpleSchema({
  header: {
    type: String
  },
  text: {
    type: String
  }
});

StatementSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Title"
  },

  desc: {
    type: String,
    label: "Description"
  },

  story: {
    type: [Story]
  },

  readCounter: {
    type: Number,
    autoValue: function() {
      return readCounter++;
    },
    autoform: {
      type:"hidden"
    }
  },

  author:{
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },

  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});

Statements.attachSchema( StatementSchema );
