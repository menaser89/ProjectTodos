Application.Collection.extend({
  name: "todos/todos",
  model: Application.Models["todos/todo"],
  localStorage: new Backbone.LocalStorage("todos-backbone")
});

// Instances of this collection can be created by calling:
// new Application.Collections["todos/todos"]()