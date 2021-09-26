import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import Title from '../components/Title'
import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
  },
})

const Login = () => {
  const classes = styles()
  return (
    <main className={classes.main}>
      <Title text='Login' />
      <LoginForm />
    </main>
  )
}

export default Login
