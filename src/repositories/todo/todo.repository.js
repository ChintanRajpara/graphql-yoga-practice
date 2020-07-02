class TodoRepository {
  static instance;
  createTodo(userId, title) {}

  updateTodo(userId, updates) {}

  getTodo(userId, todoId) {}

  getAllTodos(userId) {}

  getCompletedTodos(userId) {}

  getIncompleteTodos(userId) {}

  static getInstance() {
    if (!TodoRepository.instance) {
      console.log("CrEATED");
      TodoRepository.instance = new TodoRepository();
      return TodoRepository.instance;
    } else {
      return TodoRepository.instance;
    }
  }
}

module.exports = { TodoRepository };
