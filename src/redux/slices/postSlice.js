import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { backendAPI } from "../../constant"
import axios from "axios"
import { toast } from "sonner"

const initialState = {
    posts:[]
}


export const handleNewPostAPI = createAsyncThunk(
    'post/handleNewPostAPI',
     async function(data){
        try {

            const response = axios.post(`${backendAPI}/api/v1/blog/createBlog`,data,{
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

export const handleDeletePostAPI = createAsyncThunk(
    'post/handleDeletePostAPI',
    async function(id){
        const data = {
            blogId:id
        }
        try {

            const response = axios.post(`${backendAPI}/api/v1/blog/deleteBlog`,data,{
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

export const getAllPostsAPI = createAsyncThunk(
    'post/getAllPostsAPI',
    async function(){
        try {

            const response = axios.get(`${backendAPI}/api/v1/blog/getBlog`,{
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

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getAllPostsAPI.fulfilled,(state,action)=>{
            state.posts = action.payload
        })
    }

})

export default postSlice.reducer