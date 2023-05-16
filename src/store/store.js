import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer'
import userDataReducer from './userReducer'

export default configureStore({
    reducer:{
        user: userReducer,
        userData: userDataReducer
    }
})