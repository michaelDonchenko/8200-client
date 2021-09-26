import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../redux/actions/authActions'

const styles = makeStyles({
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  },
})

const active = {
  color: 'yellow',
}

const Navbar = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { isAuth } = useSelector((state) => state.auth)

  return (
    <AppBar position='static'>
      <Container maxWidth='md'>
        <Toolbar>
          {isAuth ? (
            <>
              <Button color='inherit'>
                <NavLink
                  exact
                  activeStyle={active}
                  className={classes.navLink}
                  to='/'
                >
                  Home
                </NavLink>
              </Button>

              <Button
                onClick={() => dispatch(logoutUser())}
                className={classes.navLink}
                color='inherit'
              >
                Logout
              </Button>
            </>
          ) : (
            <Button color='inherit'>
              <NavLink
                exact
                activeStyle={active}
                className={classes.navLink}
                to='/login'
              >
                Login
              </NavLink>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
