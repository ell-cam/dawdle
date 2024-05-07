import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import apiReducer from './api'
import authReducer from './auth'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer,
    auth: authReducer,
  }
});

export default store;