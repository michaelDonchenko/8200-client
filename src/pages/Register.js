import Title from '../components/Title'
import { makeStyles } from '@material-ui/core'
import RegisterForm from '../components/forms/RegisterForm'

const styles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
})

const Register = () => {
  const classes = styles()
  return (
    <main className={classes.main}>
      <Title text='Register' />
      <RegisterForm />
    </main>
  )
}

export default Register
