import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { deleteUserTodo, handleCheckTodo } from '../redux/actions/todoActions'

const styles = makeStyles({
  root: {
    margin: '2rem 0',
    width: '400px',
    maxWidth: '95%',
  },

  todoText: {
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
  },

  checkedTodo: {
    fontWeight: 'bold',
    fontSize: '16px',
    textDecoration: 'line-through',
    color: 'gray',
    cursor: 'pointer',
  },
})

const TodosTable = ({ todos }) => {
  const classes = styles()
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteUserTodo(id))
  }

  const handleCheck = (id, checked) => {
    dispatch(handleCheckTodo({ id, checked }))
  }

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Task</TableCell>
            <TableCell align='center'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos?.map((todo) => {
            return (
              <TableRow key={todo.id !== undefined ? todo.id : todo._id}>
                <TableCell align='center'>
                  <span
                    onClick={() =>
                      handleCheck(
                        todo.id !== undefined ? todo.id : todo._id,
                        todo.completed
                      )
                    }
                    className={
                      todo.completed ? classes.checkedTodo : classes.todoText
                    }
                  >
                    {todo.text}
                  </span>
                </TableCell>
                <TableCell align='center'>
                  <Button
                    onClick={() =>
                      handleDelete(todo.id !== undefined ? todo.id : todo._id)
                    }
                    color='secondary'
                    variant='outlined'
                  >
                    Delete todo
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TodosTable
