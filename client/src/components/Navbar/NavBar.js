import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import { AppBar, Typography } from '@material-ui/core'
import login from '../../images/login.png'
import useStyles from './styles'

export const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} maxwidth='lg'>
      <AppBar className={classes.appBar} position='fixed' >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Post Album
          </Typography>
          <img className={classes.image} src={login} alt='logo' height='60' />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}