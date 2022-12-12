import mongoose from 'mongoose'
import app from './app'
import logger from './utils/logger'

const MONGO_URL: string =
  process.env.MONGO_URL ?? 'mongodb://localhost:27017/testtodo'
const PORT: string | number = process.env.PORT ?? 3001

async function main() {
  if (!MONGO_URL.length) return console.log('⚠️  ~ MONGO_URL not found!')
  mongoose.set('strictQuery', false)

  try {
    await mongoose.connect(MONGO_URL)

    let server = app.listen(PORT)
    if (server) {
      logger.log(`Server listening on http://localhost:${PORT}`)
    }
  } catch (err: any) {
    logger.error(err.message)
  }
}

;(async () => {
  await main()
})()
