define([
		'jquery',
		'underscore',
		'backbone',
], function($, _, Backbone) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'new'      : 'editUser',
			'edit/:id' : 'editUser',
			'*actions' : 'default'
		}
	});

	var router = new AppRouter();

	var views = {};

	var initialise = function() {

		router.on('route:default', function() {
			// load, cache the list view, and render it
			require(['view/UserListView'], function(UserListView) {
				if (!views.userListView) {
					views.userListView = new UserListView({
						'router': router
					});
					console.debug('New view created: ', views.userListView);
				}
				views.userListView.render();
			});
		});

		router.on('route:editUser', function(id) {
			require(['view/UserDetailView'], function(UserDetailView) {
				if (!views.userDetailView) {
					views.userDetailView = new UserDetailView({
						'router': router
					});
					console.debug('New view created: ', views.userDetailView);
				}
				views.userDetailView.render({'id': id});
			});
		});

		Backbone.history.start();
	};

	return {
		initialise: initialise
	};
});
