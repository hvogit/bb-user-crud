define([
		'jquery',
		'underscore',
		'backbone',
		'view/UserListView',
		'view/UserDetailView'
], function($, _, Backbone, UserListView, UserDetailView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'new'      : 'editUser',
			'edit/:id' : 'editUser',
			'*actions' : 'default'
		}
	});

	var router = new AppRouter();

	var userListView = new UserListView({
		'router': router
	});
	var userDetailView = new UserDetailView({
		'router': router
	});

	var initialise = function() {

		router.on('route:default', function() {
			userListView.render();
		});

		router.on('route:editUser', function(id) {
			userDetailView.render({'id': id});
		});

		Backbone.history.start();
	};

	return {
		initialise: initialise
	};
});
