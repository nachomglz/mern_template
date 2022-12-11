import { Router } from 'express'
import controller from '../controllers/todos'

const testRouter = Router()

testRouter.get('/', controller.getTodos)
testRouter.post('/', controller.createTodo)
testRouter.delete('/:id', controller.removeTodo)

export default testRouter
