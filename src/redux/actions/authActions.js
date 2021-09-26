import { createAsyncThunk } from '@reduxjs/toolkit'
import { login, logout, register } from '../../api/auth'

export const registerUser = createAsyncThunk(
  'auth/register',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await register(values)
      return data
    } catch (error) {
      if (error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      }

      return rejectWithValue(error.response.data)
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await login(values)

      return data
    } catch (error) {
      if (error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      }

      return rejectWithValue(error.response.data)
    }
  }
)

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await logout()
      return data
    } catch (error) {
      if (error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      }

      return rejectWithValue(error.response.data)
    }
  }
)
