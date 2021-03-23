import PostMessage from '../models/postMessage.js'
import mongoose from 'mongoose'

// @route  GET api/posts
// @desc   Get all posts
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find() 
    res.status(200).json(postMessages)   
  } catch(error) {
      res.status(404).json({message: error.message})
  }
}

// @route  POST api/post
// @desc   Create Post
export const createPost = async (req, res) => { 
  const post = req.body
  const newPost = new PostMessage(post)

  try {
    await newPost.save()          
    res.status(201).json(newPost) 
  } catch(error) {
      res.status(409).json({message: error.message})
  }
}

// @route  PATCH api/posts/:id
// @desc   Update Post
export const updatePost = async (req, res) => {
  const post = req.body                       
  const { id: _id } = req.params              
                                       
  if(!mongoose.Types.ObjectId.isValid(_id)) { 
    return res.status(404).send('No Post with that id!')

  } else {  
    const updatedPost = await postMessage.findByIdAndUpdate(_id,
      {...post, _id}, {new: true})

    res.json(updatedPost) 
  } 
}

// @route  DELETE api/posts/:id
// @desc   Delete Post
export const deletePost = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) { 
    return res.status(404).send('No Post with that id!')

  } else {
      await postMessage.findByIdAndRemove(id) 
      res.json({message: 'Post deleted successfully'})
  }
  console.log('DELETE')
}

// @route  PATCH api/posts/:id/likepost
// @desc   Update Post
export const likePost = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) { 
    return res.status(404).send('No Post with that id!')

  } else {
    const post = await postMessage.findById(id)
    const updatedPost = await postMessage.findByIdAndUpdate(
      id, {likeCount: post.likeCount + 1}, {new: true})

    res.json(updatedPost)
  }  
}