import React from 'react'
import Post from './Post/Post';
import useStyles from './styles'
import { Grid, CircularProgress } from '@material-ui/core'

// to fetch data from a global store/state
import { useSelector } from 'react-redux'

const Posts = ({ setCurrentId }) => {
  const classes = useStyles()
  
  // map-state-to-posts
  const posts = useSelector(state => state.posts) 
  console.log(posts)

  return(

  !posts.length 
  ? <CircularProgress />
  : (
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        {posts.map(post => (
          <Grid item key={post._id} xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts