import express from 'express'
import Todo from '../models/Todo'
import logger from '../utils/logger'
import { Todo as ITodo } from '../utils/types'

interface CreateTodoRequest extends express.Request {
  body: ITodo
}

const todosController = {
  getTodos: async (req: express.Request, res: express.Response) => {
    let todos = await Todo.find({})
    return res.status(200).json({
      status: 'success',
      todos
    })
  },
  createTodo: async (req: express.Request, res: express.Response) => {
    const { title, status } = req.body

    if (!title || !status) {
      return res.status(400).json({
        status: 'failed',
        message: 'Title or status not provided'
      })
    }

    let newTodo = new Todo({
      title,
      status
    })

    try {
      let todo = await newTodo.save()
      return res.status(200).json({
        status: 'success',
        todo
      })
    } catch (err: any) {
      logger.error(err.message)
    }
  },
  removeTodo: async (req: express.Request, res: express.Response) => {
    const { id } = req.params
    if (!id) {
      return res
        .status(400)
        .json({ status: 'failed', message: 'Id not provided' })
    }
    let todo = await Todo.findById(id)
    if (!todo) {
      return res
        .status(404)
        .json({ status: 'failed', message: 'The todo was not found!' })
    }
    let removedTodo = await todo.remove()
    return res.json({
      status: 'success',
      todo: removedTodo
    })
  }
}

export default todosController
