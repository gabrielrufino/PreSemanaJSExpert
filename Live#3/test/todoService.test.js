const { describe, it, before, afterEach } = require('mocha')
const { expect } = require('chai')
const { createSandbox } = require('sinon')

const TodoService = require('../src/todoService')

describe('todoService', () => {
  let sandbox

  before(() => {
    sandbox = createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#list', () => {
    const mockDatabase = [
      {
        name: 'Rufino',
        age: 21,
        meta: {
          revision: 0,
          created: new Date(),
          version: 0
        },
        '$loki': 1
      }
    ]

    let todoService

    beforeEach(() => {
      const dependencies = {
        todoRepository: {
          list: sandbox.stub().returns(mockDatabase)
        }
      }

      todoService = new TodoService(dependencies)
    })

    it('Should return data on a specific format', () => {
      const result = todoService.list()
      const [{ meta, $loki, ...expected }] = mockDatabase

      expect(result).to.be.deep.equal([expected])
    })
  })
})
