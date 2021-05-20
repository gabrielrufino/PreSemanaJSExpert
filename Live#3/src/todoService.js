'use strict'

class TodoService {
  constructor({ todoRepository }) {
    this.todoRepository = todoRepository
  }

  create(todoItem) {
    
  }

  list(query) {
    const result = this
      .todoRepository
      .list()
      .map(({ $loki, meta, ...rest }) => rest)

    return result
  }
}

module.exports = TodoService
