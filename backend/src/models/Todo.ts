import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
  title: { type: String, require: true },
  status: { type: String, require: true }
})

export default mongoose.model('Todo', TodoSchema)
