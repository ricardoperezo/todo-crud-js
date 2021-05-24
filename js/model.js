export default class Model {
  constructor() {
    this.view = null;
    this.todos = JSON.parse(localStorage.getItem("todos"));
    if (!this.todos || this.todos.length < 1) {
      this.todos = [
        {
          id: 0,
          title: "Test",
          description: "This is an description",
          completed: false,
        },
      ];
      this.currentId = 1;
    } else {
      this.currentId = this.todos[this.todos.length - 1].id + 1;
    }
    this.currentId = 1;
  }

  setView(view) {
    this.view = view;
  }

  save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  getTodos() {
    return this.todos.map((todo) => ({ ...todo })); // "clone" every todo item of todos list
  }

  findTodo(id) {
    return this.todos.findIndex((todo) => todo.id === id);
  }

  toggleCompleted(id) {
    const index = this.findTodo(id);
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.save();
  }

  editTodo(id, values) {
    const index = this.findTodo(id);
    Object.assign(this.todos[index], values);
    this.save();
  }

  addTodo(title, description) {
    const todo = {
      id: this.currentId++,
      title,
      description,
      completed: false,
    };

    this.todos.push(todo);
    console.log(this.todos);
    this.save();

    // return a clone of todo object
    return { ...todo };
  }

  removeTodo(id) {
    const index = this.findTodo(id);
    this.todos.splice(index, 1); // delete item of todos array (our database)
    this.save();
  }
}