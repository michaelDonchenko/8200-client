import React, { useState } from 'react'
import { makeStyles, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createUserTodo } from '../../redux/actions/todoActions'

const styles = makeStyles({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  input: {
    width: '200px',
    margin: '1rem',
  },

  button: {
    width: '150px',
    margin: '1rem',
  },
})

const AddTodo = () => {
  const [task, setTask] = useState('')
  const classes = styles()
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(createUserTodo(task))
    setTask('')
  }

  return (
    <form className={classes.form} onSubmit={(e) => handleClick(e)}>
      <TextField
        onChange={(e) => {
          setTask(e.target.value)
        }}
        label='New Task'
        name='task'
        value={task}
        type='text'
        required
        className={classes.input}
      />

      <Button
        className={classes.button}
        type='submit'
        color='primary'
        variant='contained'
      >
        Add todo
      </Button>
    </form>
  )
}

export default AddTodo
