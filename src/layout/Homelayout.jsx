import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsersAPI } from "../redux/slices/userSlice"
import { Usercard } from "../components/usercard"

export const Homelayout = ({children}) => {

    const user = useSelector((state)=>state.auth?.data.loggedInUserDetails)
    const users = useSelector((state)=>state.users?.user)

    const dispatch = useDispatch()

    async function getUsers(){
        await dispatch(getAllUsersAPI())
    }

    useEffect(()=>{
        getUsers()
    },[])


    return(
    <>

      {/* Navbar */}
      <div className="h-20 border border-b-[1px] flex py-2 ">

        <div className="h-full w-1/2 flex justify-start items-center px-10 font-semibold text-2xl">
            Log
        </div>

        <div className="h-full w-1/2 flex justify-end items-center px-10 font-semibold">

            <div className="border py-2 px-4 rounded-md">
                {user?.username}
            </div>

        </div>

      </div>

      <div className="flex">

        <div className="w-[75%]">
            {children} 
        </div>

        <div className="w-[25%] min-h-[90vh] border-l-[1px] flex flex-col justify-start items-start">

            <div className="border-b-[1px] w-full py-4 px-4 font-semibold">

                Users
            </div>
            <div className="w-full px-4">
                {
                    users?.map((user)=>(
                        <Usercard users={user} key={user._id}/>
                    ))
                }
            </div>
            
        </div>

      </div>

     
    </>


)}