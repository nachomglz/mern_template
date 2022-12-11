import express from 'express'
import cors from 'cors'
import router from './routes'

const app = express()

// Add middiewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1', router)

export default app
