import { Paper, makeStyles, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { handleChange, handleSubmit } from '../../helpers/customFunctions'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearError } from '../../redux/reducers/authSlice'
import { useHistory } from 'react-router-dom'
import { loginUser as loginAction } from '../../redux/actions/authActions'
import Alert from '../Alert'
import { useEffect } from 'react'

const styles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '400px',
  },
  form: {
    width: '95%',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem auto',
    padding: '1rem',
  },

  flex1: {
    flex: 1,
  },

  field: {
    margin: '0.5rem',
  },

  link: {
    color: 'blue',
    textDecoration: 'none',
  },
})

const LoginForm = () => {
  const { error, loading, isAuth } = useSelector((state) => state.auth)
  const history = useHistory()

  if (isAuth) {
    history.push('/')
  }

  const classes = styles()
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const { email, password } = values

  useEffect(() => {
    return () => dispatch(clearError())
  }, [])

  return (
    <Paper elevation={3} className={classes.root}>
      <form
        className={classes.form}
        onSubmit={(e) => handleSubmit(e, loginAction, values, dispatch)}
      >
        <TextField
          onChange={(e) => {
            handleChange(e, values, setValues)
            dispatch(clearError())
          }}
          label='Email'
          variant='outlined'
          name='email'
          value={email}
          type='email'
          required
          className={classes.field}
        />

        <TextField
          onChange={(e) => {
            handleChange(e, values, setValues)
            dispatch(clearError())
          }}
          label='Password'
          variant='outlined'
          name='password'
          value={password}
          type='password'
          required
          className={classes.field}
        />

        <Button
          type='submit'
          color='primary'
          variant='contained'
          className={classes.field}
        >
          {loading ? 'Loading...' : 'Submit'}
        </Button>

        {error && <Alert color='red' message={error} />}

        <div className={classes.flex1}></div>

        <Link className={classes.link} to='/register'>
          Don't have an account? click here
        </Link>
      </form>
    </Paper>
  )
}

export default LoginForm
