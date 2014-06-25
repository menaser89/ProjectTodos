Application.View.extend({
  name: "todos/index",

  className: "in-view",

  initialize: function() {
      this.collection.fetch();
  },

  events: {
        "submit form": function (event) {
            event.preventDefault(); //No hace un evio de formulario le quita este valor por defecto
            this.collection.create(this.serialize());
            this.$('input[name=title]').val('');
        },
      "change input[type=checkbox]": function(event) {
          var model = $(event.target).model();
          model.set({done: event.target.checked});
      }
    }
});

// Instances of this view can be created by calling:
// new Application.Views["todos/index"]()