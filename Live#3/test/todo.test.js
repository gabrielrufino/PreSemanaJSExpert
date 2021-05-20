const { describe, it, before,  } = require('mocha')
const { expect } = require('chai')

const Todo = require('../src/todo')

describe('todo', () => {
  describe('#isValid', () => {
    it('Should return invalid when creating an object without text', () => {
      const data = {
        text: '',
        when: new Date('2020-12-01')
      }

      const todo = new Todo(data)
      const result = todo.isValid()
      expect(result).to.be.not.ok
    })

    it('Should return invalid when creating an object using the "when" property is invalid', () => {
      const data = {
        text: 'Do something',
        when: new Date('20-12-01')
      }

      const todo = new Todo(data)
      const result = todo.isValid()
      expect(result).to.be.not.ok
    })

    it('Should have "id", "text", "when" and "status" properties after creating object', () => {
      const data = {
        text: 'Do something',
        when: new Date('2020-12-01')
      }

      const todo = new Todo(data)
      const result = todo.isValid()
      expect(result).to.be.ok

      
    })
  })
})
