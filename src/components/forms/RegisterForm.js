import { Paper, makeStyles, TextField, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { handleChange, handleSubmit } from '../../helpers/customFunctions'
import { registerUser as registerAction } from '../../redux/actions/authActions'
import Alert from '../Alert'
import { clearError } from '../../redux/reducers/authSlice'

const styles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '400px',
  },
  form: {
    width: '95%',
    minHeight: '450px',
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

const RegisterForm = () => {
  const { error, loading, isAuth, message } = useSelector((state) => state.auth)
  const history = useHistory()

  if (isAuth) {
    history.push('/')
  }

  const classes = styles()
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { name, email, password, confirmPassword } = values

  useEffect(() => {
    return () => dispatch(clearError())
  }, [])

  return (
    <Paper elevation={3} className={classes.root}>
      <form
        className={classes.form}
        onSubmit={(e) => handleSubmit(e, registerAction, values, dispatch)}
      >
        <TextField
          onChange={(e) => {
            handleChange(e, values, setValues)
            dispatch(clearError())
          }}
          label='Name'
          variant='outlined'
          name='name'
          value={name}
          type='text'
          required
          className={classes.field}
        />

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

        <TextField
          onChange={(e) => {
            handleChange(e, values, setValues)
            dispatch(clearError())
          }}
          label='Confirm Password'
          variant='outlined'
          name='confirmPassword'
          value={confirmPassword}
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

        <div className={classes.flex1}></div>

        {error && <Alert color='red' message={error} />}
        {message && <Alert color='green' message={message} />}

        <Link className={classes.link} to='/login'>
          Already registered? click here to Login
        </Link>
      </form>
    </Paper>
  )
}

export default RegisterForm
