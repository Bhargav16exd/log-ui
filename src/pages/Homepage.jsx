import { useEffect } from "react";
import { Homelayout } from "../layout/Homelayout"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getAllPostsAPI} from "../redux/slices/postSlice"
import { Postcard } from "../components/Postcard";

export const Home = () =>{


    const dispatch = useDispatch()

    // Get all posts from redux store
    const posts = useSelector((state)=>state?.post?.posts?.data)

    async function getPosts(){

        // Calls getAllPostsAPI to get all posts
        await dispatch(getAllPostsAPI())
    }

    // Get all posts on page load
    useEffect(()=>{
        getPosts()
    },[])

    return(
        <>
         <Homelayout>

            <div className="h-full px-10 "> 

                {/* Recent Posts Title */}
                <div className="w-full py-4 px-4 flex">
                    <div className="w-1/2 text-3xl font-semibold my-2">
                    Recent Posts
                    </div>
                    <div className="w-1/2 flex justify-end ">
                        <button className="border py-2 px-4 rounded-md hover:bg-black hover:text-white transition-colors ease-linear delay-150">
                            <Link to='/newpost'>Create Post</Link>
                        </button>
                    </div>
                </div>

                {/* Postcards */}
                <div className="py-4 px-4">
                        {
                            posts?.map((post)=>(<Postcard post={post} key={post._id}/>))
                        }                 
                </div>

            </div>
            
         </Homelayout>
        </>
    )

}