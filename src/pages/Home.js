import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../components/Title'
import { useHistory } from 'react-router'
import TodosTable from '../components/TodosTable'
import { makeStyles } from '@material-ui/core/styles'
import AddTodo from '../components/forms/AddTodo'
import { getUserTodos } from '../redux/actions/todoActions'
import Loader from '../components/Loader'
import Alert from '../components/Alert'

const styles = makeStyles({
  todosContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const Home = () => {
  const { isAuth, user } = useSelector((state) => state.auth)
  const {
    todos,
    loading: todoLoading,
    error,
  } = useSelector((state) => state.todo)

  const history = useHistory()
  if (!isAuth) {
    history.push('/login')
  }

  const classes = styles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserTodos())
  }, [])

  if (!todoLoading && error === 'Unauthorized') {
    return (
      <Alert
        color='red'
        message='Your session expired please logout in order to get new token'
      />
    )
  }

  return (
    <div>
      <Title text={`Welcome ${user?.name}`} />

      {todoLoading && <Loader />}

      <div className={classes.todosContainer}>
        <AddTodo />
        {!todoLoading && !todos?.length && (
          <p>You do not have any todos yet.</p>
        )}
        {!todoLoading && todos?.length > 0 && <TodosTable todos={todos} />}
      </div>
    </div>
  )
}

export default Home
