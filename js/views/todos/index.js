Application.View.extend({
  name: "todos/index",

//  tagName: "hola",

  className: "in-view",

  initialize: function() {
      this.collection.fetch();
  },

  events: {
        "submit form": function (event) {
            event.preventDefault(); //No hace un evio de formulario le quita este valor por defecto
            var nuevo = this.serialize();
            nuevo.title = nuevo.title.toUpperCase();
            nuevo.date = nuevo.formatDate;
            console.log(nuevo);
            this.collection.create(nuevo);
            this.$('input[name=title]').val('');
            this.$('textarea[name=text]').val('');
        },

      "change input[type=checkbox]": function(event) {
          var todo = $(event.target).model();
          todo.set({done: event.target.checked});
          todo.save();
      },

      "click .delBtn": function() {
          var deletepost = $(event.target).model();
          deletepost.destroy();

      },

      "click .delAllBtn": function() {
          var model;
          while (model = this.collection.first()) {
              model.destroy();
          }
      },

      "click .int-task": function(e) {
//        alert("Hola Mundo");
        $(e.currentTarget).children(".options").toggle();

      },

      "click .delCompBtn": function() {
          for (var i = this.collection.length - 1; i >= 0; i--)
            if (this.collection.at(i).attributes.done) {
                this.collection.at(i).destroy();
            }
      }

    }
});

// Instances of this view can be created by calling:
// new Application.Views["todos/index"]()