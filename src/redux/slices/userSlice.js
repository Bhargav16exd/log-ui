import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import {toast} from "sonner"
import { backendAPI } from "../../constant"

const initialState = {
    user:[]
}


export const getAllUsersAPI = createAsyncThunk(
    'user/getAllUsers',
    async function(){
        try {

            const response = axios.get(`${backendAPI}/api/v1/user/users`)

            toast.promise(response,{
                loading:""
            })

            return (await response).data
            
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }
)

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUsersAPI.fulfilled,(state,action)=>{
            state.user = action.payload.data
        })
    }
})

export default userSlice.reducer