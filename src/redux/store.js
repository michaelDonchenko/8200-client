import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/authSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import todoSlice from './reducers/todoSlice'

const reducers = combineReducers({
  auth: authSlice,
  todo: todoSlice,
})

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
})
