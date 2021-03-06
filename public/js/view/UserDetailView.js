define([
    'jquery',
    'underscore',
    'backbone',
    'handlebar',
    'model/UserModel',
    'text!template/userDetailTemplate.html'
], function($, _, Backbone, Handlebars, UserModel, userDetailTemplate) {

  var UserDetailView = Backbone.View.extend({
    el: $("#page"),

    events: {
      'change input': 'updateModel',
      'click .save': 'saveUser',
      'click .delete': 'deleteUser',
      'click .cancel': 'cancelEdit'
    },

    initialize: function () {
    },

    handleValidationErrors: function(model, errors){
      this.$el.find("span.error").html("");
      for (var i = 0; i < errors.length; i++) {
        this.$el.find("[name='" + errors[i].name + "']~span.error:first").html(errors[i].error);
      }
    },

    updateModel: function(event) {
      var input = event.currentTarget;
      var change = {};
      change[input.name] = input.value;
      this.model.set(change);
      console.debug('Model updated ', this.model);
    },

    render: function(options) {
      var thisView = this;
      thisView.model = new UserModel(options);
      if (options.id) {
        thisView.model.fetch({
          success: function(user) {
            thisView._render();
          }
        });
      } else {
        thisView._render();
      }
    },

    _render: function() {
      console.debug('Rendering uses this view model ', this.model);
      // compile and cache template
      if (!Handlebars.templates['userDetailTemplate']) {
        Handlebars.templates['userDetailTemplate'] = Handlebars.compile(userDetailTemplate);
      }
      var context = {};
      if (this.model) {
        context.user = this.model.toJSON();
      }
      // apply template
      console.debug('Template context ', context);
      var html = Handlebars.templates.userDetailTemplate(context);
      this.$el.html(html);

      // register model validation error handler
      this.listenTo(this.model, 'invalid', this.handleValidationErrors);
    },

    saveUser: function(event) {
      event.preventDefault();
      var router = this.options.router;

      // var userDetails = $('.user-detail-form').serializeObject();
      // var userModel = new UserModel();
      var model = this.model;
      model.save({}, {
        success: function() {
          console.debug('Model saved ', model);
          router.navigate('', {
            trigger: true
          });
        },
        error: function() {
          console.error('Error saving the user');
        }
      });
    },

    deleteUser: function() {
      var router = this.options.router;
      this.model.destroy({
        success: function() {
          console.debug('Model destroyed');
          router.navigate('', {
            trigger: true
          });
        }
      });
    },

    cancelEdit: function() {
      var router = this.options.router;
      router.navigate('', {
        trigger: true
      });
    }

  });

  return UserDetailView;

});
