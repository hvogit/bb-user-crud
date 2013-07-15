define([
		'jquery',
		'underscore',
		'backbone',
		'router'
], function($, _, Backbone, Router) {
	// jQuery plugin to generate an js object from an input form
	$.fn.serializeObject = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};

	var initialise = function() {
		Router.initialise();
	};
	return {
		initialise: initialise
	};

});