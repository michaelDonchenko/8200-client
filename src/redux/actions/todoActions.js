import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  checkTodo,
  createTodo,
  getTodos,
  removeTodo,
  uncheckTodo,
} from '../../api/todo'

export const getUserTodos = createAsyncThunk(
  'todo/getUserTodos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTodos()
      return data
    } catch (error) {
      if (error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      }

      return rejectWithValue(error.response.data)
    }
  }
)

export const createUserTodo = createAsyncThunk(
  'todo/createUserTodo',
  async (text, { rejectWithValue }) => {
    try {
      const { data } = await createTodo(text)

      //get todos to display updated state to user
      if ((data.message = 'Todo added succefully')) {
        const {
          data: { todos },
        } = await getTodos()
        return todos
      }
    } catch (error) {
      if (error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      }

      return rejectWithValue(error.response.data)
    }
  }
)

export const deleteUserTodo = createAsyncThunk(
  'todo/deleteUserTodo',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await removeTodo(id)

      //get todos to display updated state to user
      if ((data.message = 'Todo deleted succefully')) {
        const {
          data: { todos },
        } = await getTodos()
        return todos
      }
    } catch (error) {
      if (error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      }

      return rejectWithValue(error.response.data)
    }
  }
)

export const handleCheckTodo = createAsyncThunk(
  'todo/handleCheckTodo',
  async ({ id, checked }, { rejectWithValue }) => {
    try {
      const { data } = checked ? await uncheckTodo(id) : await checkTodo(id)

      //get todos to display updated state to user
      if ((data.message = 'Todo updated succefully')) {
        const {
          data: { todos },
        } = await getTodos()
        return todos
      }
    } catch (error) {
      if (error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      }

      return rejectWithValue(error.response.data)
    }
  }
)
