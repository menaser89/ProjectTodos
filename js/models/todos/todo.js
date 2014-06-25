Application.Model.extend({
  name: "todos/todo",
  defaults: {
      title: "",
      done: false
  }
});

// Instances of this model can be created by calling:
// new Application.Models["todos/todo"]()