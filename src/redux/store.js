import {configureStore} from '@reduxjs/toolkit'

import authSlice from "../redux/slices/authSlice"
import userSlice from "../redux/slices/userSlice"
import postSlice from "../redux/slices/postSlice"

// Redux store
const store = configureStore({
    reducer:{
        auth:authSlice,
        users:userSlice,
        post:postSlice
    }
})

export default store 