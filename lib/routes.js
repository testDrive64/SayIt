FlowRouter.route('/', {
  name: 'home',
  action: function() {
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
