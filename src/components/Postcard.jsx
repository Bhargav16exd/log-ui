import { useDispatch, useSelector } from "react-redux"
import { getAllPostsAPI, handleDeletePostAPI } from "../redux/slices/postSlice"

export const Postcard = ({post}) => {

    const currentUser = useSelector((state)=>state.auth?.data.loggedInUserDetails)
    const dispatch = useDispatch()

    async function handleDelete(){

        await dispatch(handleDeletePostAPI(post._id))
        await dispatch(getAllPostsAPI())

    }


    return(
        <div className="border rounded-lg my-6">

            <div className="h-[33.33%] text-2xl font-semibold py-4 px-6">
                {post?.title}
            </div>
            <div className="h-[33.33%] text-sm py-2 px-6 my-4" >
                {post?.content}
            </div>
            <div className="h-[33.33%] w-full flex  items-center text-sm text-gray-700 py-2 px-6 mb-5">
                <div className="w-1/2">
                    Blog Id : {post?._id}
                </div>

                {
                    currentUser?.role == "ADMIN"  || currentUser?.role == "MODERATOR" ? 
                    <div className="w-1/2 flex justify-end  items-end">
                        <button className="bg-red-500 text-white py-2 px-4 rounded-lg" onClick={handleDelete}>
                            Delete
                        </button>
                    </div> 
                    :
                    <></>
                }
                
            </div>
        
        </div>
    )
}