define([
	'underscore',
	'backbone'
],
function(_, Backbone) {

	var UserModel = Backbone.Model.extend({

		urlRoot: '/users',

		defaults: {
			score: 0
		},

		validate: function(model) {
			var errors = [];

			if (!model.name || model.name.trim() === '') {
				errors.push({name: 'name', error: 'User name is required'});
			}

			if (!/^\+?\d+$/.test(model.score)) {
				errors.push({name: 'score', error: 'Score must be a positive integer'});
			}

			if (errors.length > 0) {
				return errors;
			}
		}

	});

	return UserModel;

});
