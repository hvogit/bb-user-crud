define([
    'jquery',
    'underscore',
    'backbone',
    'handlebar',
    'collection/UserCollection',
    'model/UserModel',
    'text!template/userListTemplate.html'
], function($, _, Backbone, Handlebars, UserCollection, UserModel, userListTemplate) {

  var UserListView = Backbone.View.extend({
    el: $("#page"),

    events: {
      'click a.new': 'newUser',
      'click a.clear': 'clearUsers'
    },

    render: function() {
      var thisView = this;

      // data model
      var users = this.collection = new UserCollection();
      users.fetch({
        success: function(collection, response, options) {
          _render(collection);
        },
        error: function(collection, response, options) {
          console.log('Error fetching users');
        }
      });

      var _render = function(collection) {
        var context = {
          'users': collection.toJSON()
        };

        // compile and cache template
        if (!Handlebars.templates['userListTemplate']) {
          Handlebars.templates['userListTemplate'] = Handlebars.compile(userListTemplate);
        }

        // apply template
        var html = Handlebars.templates.userListTemplate(context);

        //render  'this' in this scope is Window !
        thisView.$el.html(html);
      };
    },

    newUser: function() {
      this.options.router.navigate('new', {
        trigger: true
      });
    },

    clearUsers: function() {
      var thisView = this;
      var allUsers = new UserModel({
        id: 'ALL'
      });
      allUsers.destroy({
        success: function() {
          thisView.render();
        },
        error: function() {
          console.error('Error removing users');
        }
      });
    }
  });

  return UserListView;

});
