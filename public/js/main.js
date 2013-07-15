require.config({
	// http://stackoverflow.com/questions/13944672/cannot-read-property-view-of-undefined
	// http://requirejs.org/docs/api.html#config-shim
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		handlebar: {
			exports: 'Handlebars'
		}
	},

	paths: {
		jquery: 'lib/jquery/jquery-1.8.3',
		underscore: 'lib/underscore/underscore-1.5.1',
		backbone: 'lib/backbone/backbone-1.0.0',
		handlebar: 'lib/handlebar/handlebars-1.0.0',
		template: '../template'
	}
});

require([
		'app'
], function(App) {
	App.initialise();
});
