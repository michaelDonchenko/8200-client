import { createSlice } from '@reduxjs/toolkit'
import { loginUser, logoutUser, registerUser } from '../actions/authActions'

const initialState = {
  user: null,
  isAuth: false,
  loading: false,
  error: '',
  message: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    clearError: (state, action) => {
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder
      //register a user
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.message = action.payload.message
        state.error = ''
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.message = ''
      })
      //login a user
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.isAuth = true
        state.user = action.payload.user
        state.error = ''
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuth = false
      })
      //logout a user
      .addCase(logoutUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false
        state.isAuth = false
        state.user = null
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearError } = authSlice.actions

export default authSlice.reducer
