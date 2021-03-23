import React, {useState, useEffect} from 'react'

import { Container, Grow, Grid} from '@material-ui/core'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import useStyles from './styles'
import {NavBar} from './components/Navbar/NavBar'

import { getPosts } from './actions/posts'
import { useDispatch } from 'react-redux'


const App = () => {
  const classes = useStyles()

  const [currentId, setCurrentId] = useState(null) 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])


  return (
    <>
      <NavBar />
      <Grow in>
        <Container>
          <Grid 
            className={classes.mainContainer} 
            container 
            justify='space-between' 
            alignItems='stretch' 
            spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts 
                setCurrentId={setCurrentId} 
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form 
                currentId={currentId} 
                setCurrentId={setCurrentId} 
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  )
}

export default App