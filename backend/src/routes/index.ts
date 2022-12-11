import todosRouter from './todos'
import { Router } from 'express'

const router = Router()

// Add router prefixes
router.use('/todos', todosRouter)

export default router
