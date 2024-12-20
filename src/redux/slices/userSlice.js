import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import {toast} from "sonner"
import { backendAPI } from "../../constant"

const initialState = {
    user:[],
    logs:[]
}

// Calls getAllUsers API to get all users
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

// Calls addModerator API to add a moderator
export const addModeratorAPI = createAsyncThunk(
    'user/addModerator',
    async function(id){
        const data = {
            id:id
        }
        try {
            const response = axios.post(`${backendAPI}/api/v1/user/addMod`,data,{
                headers: {
                     "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })

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

// Calls removeModerator API to remove a moderator
export const removeModeratorAPI = createAsyncThunk(
    'user/removeModerator',
    async function(id){
        const data = {
            id:id
        }
        try {
            const response = axios.post(`${backendAPI}/api/v1/user/removeMod` ,data , {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
               }
            })

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

// Calls getLogs API to get all logs
export const getLogsAPI = createAsyncThunk(
    'user/getLogs',
    async function(){
        try {
            const response = axios.get(`${backendAPI}/api/v1/user/logs` , {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
               }
            })

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

// Calls handleBan API to ban a user
export const handleBan = createAsyncThunk(
    'user/handleBan',
    async function(id){
        const data = {
            id:id
        }
        try {
            const response = axios.post(`${backendAPI}/api/v1/user/ban` ,data , {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
               }
            })

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

// Calls handleUnban API to unban a user
export const handleUnban = createAsyncThunk(
    'user/handleUnban',
    async function(id){
        const data = {
            id:id
        }
        try {
            const response = axios.post(`${backendAPI}/api/v1/user/unban` ,data , {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
               }
            })

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
        .addCase(getLogsAPI.fulfilled,(state,action)=>{
            state.logs = action.payload.data
        })
    }
})

export default userSlice.reducer