Statements = new Mongo.Collection('statements');

Statements.allow({
  insert: function(userId, doc) {
    return !!userId; // who is allow to writing a statements
                      // change these at any time to if somebody is not sign in then he is named anonymous
                      // but she or he can write what he want
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

Chapter = new SimpleSchema({
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

  chapter: {
    type: [Chapter]
  },
  favorites: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type:"hidden"
    }

  },
/*
  readCounter: {
    type: Number,
    defaultValue: 0,
    autoform: {
      type:"hidden"
    }
  },
*/
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

Meteor.methods({
  toggleFavoritesItem: function(id, currentState) {
    Statements.update(id, {
      $set: {
        favorites: !currentState
      }
    });
  }
});

/*
Meteor.methods({
  clickCounter: function(id, currentState) {
    Statements.update(id, {
      $set: {
        readCounter.value += 1;
      }
    })
  }
});
*/
Statements.attachSchema( StatementSchema );
