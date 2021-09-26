import { createSlice } from '@reduxjs/toolkit'
import {
  createUserTodo,
  deleteUserTodo,
  getUserTodos,
  handleCheckTodo,
} from '../actions/todoActions'

const initialState = {
  todos: null,
  error: '',
  message: '',
  loading: false,
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get user todos
      .addCase(getUserTodos.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getUserTodos.fulfilled, (state, action) => {
        state.loading = false
        state.todos = action.payload.todos
        state.error = ''
      })
      .addCase(getUserTodos.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.todos = null
      })
      //create user todo
      .addCase(createUserTodo.pending, (state, action) => {
        state.loading = true
      })
      .addCase(createUserTodo.fulfilled, (state, action) => {
        state.loading = false
        state.todos = action.payload
        state.error = ''
      })
      .addCase(createUserTodo.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.message = ''
      })
      //create user todo
      .addCase(deleteUserTodo.pending, (state, action) => {
        state.loading = true
      })
      .addCase(deleteUserTodo.fulfilled, (state, action) => {
        state.loading = false
        state.todos = action.payload
        state.error = ''
      })
      .addCase(deleteUserTodo.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.message = ''
      })
      //create user todo
      .addCase(handleCheckTodo.pending, (state, action) => {
        state.loading = true
      })
      .addCase(handleCheckTodo.fulfilled, (state, action) => {
        state.loading = false
        state.todos = action.payload
        state.error = ''
      })
      .addCase(handleCheckTodo.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.message = ''
      })
  },
})

export const {} = todoSlice.actions

export default todoSlice.reducer
