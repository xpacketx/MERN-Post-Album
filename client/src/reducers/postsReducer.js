import {CREATE, READ, UPDATE, DELETE, LIKE} from '../constants/actionTypes'

// eslint-disable-next-line
export default(posts=[], action) => {

  switch(action.type) {
    case READ: 
      return action.payload

    case CREATE: 
      return [...posts, action.payload]

    case UPDATE: 
    case LIKE: 
      return posts.map(post => post._id === action.payload._id ? action.payload : post)

    case DELETE:
      return posts.filter(post => post._id !== action.payload)

    default:
      return posts
  }
}