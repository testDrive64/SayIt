if (Meteor.isClient) {
  Accounts.onLogin(function() {
    FlowRouter.go('statement-list');
  });

  Accounts.onLogout(function() {
    FlowRouter.go('home');
  });

  FlowRouter.triggers.enter([function(context, redirect) {
    if(!Meteor.userId()) {
      FlowRouter.go('home');
    }
  }]);
}

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    if(Meteor.userId()) {
      FlowRouter.go('statement-list');
    }
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/statement-list', {
  name: 'statement-list',
  action: function() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Statements'});
  }
});

FlowRouter.route('/statement/:id', {
  name: 'statement',
  action: function() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'StatementSingle'});
  }
});

FlowRouter.route('/favorites', {
  name: 'favorites',
  action: function() {
    BlazeLayout.render('MainLayout', {main: 'Favorites'});
  }
});

FlowRouter.route('/read-statement', {
  name: 'read-statement',
  action: function() {
    BlazeLayout.render('MainLayout', {main: 'LastRead'});
  }
});

FlowRouter.route('/open-list', {
  name: 'open-list',
  action: function() {
    BlazeLayout.render('MainLayout', {main: 'OpenList'});
  }
})
