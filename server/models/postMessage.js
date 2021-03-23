import mongoose from 'mongoose'
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: String,
  message: String,
  creator: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const PostMessage = mongoose.model('postMessage', PostSchema)

export default PostMessage
