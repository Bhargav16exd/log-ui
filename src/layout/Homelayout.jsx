import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsersAPI } from "../redux/slices/userSlice"
import { Usercard } from "../components/Usercard"
import set from "../assets/manage.png"
import {Link} from "react-router-dom"
import {handleLogoutAPI} from "../redux/slices/authSlice"
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";

export const Homelayout = ({children}) => {

    // Get current user details from redux store
    const user = useSelector((state)=>state.auth?.data.loggedInUserDetails)

    // Get all users from redux store
    const users = useSelector((state)=>state.users?.user)

    const dispatch = useDispatch()


    async function getUsers(){

        // Calls getAllUsersAPI to get all users
        await dispatch(getAllUsersAPI())
    }

    async function handleLogout(){
        try {

            // Calls handleLogoutAPI to logout
            const res = await dispatch(handleLogoutAPI())
        } catch (error) {
        }
    }

    // Get all users on page load
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

            {
                user?.role == "ADMIN" ? <Link to="/admin">
                <div className="border py-2 px-4 rounded-md mx-4 flex justify-center items-center cursor-pointer">
    
                    <div>Admin Dashboard</div>
                    <img src={set} alt="Wrench Icon" className="h-4 w-4 ml-2"/>
                    
                </div></Link>
                :
                <></>

            }
            

            <div className=" py-2 px-4 ">
                <Menu>
                    <MenuHandler>
                        <Button>{user?.username}</Button>
                    </MenuHandler>
                    
                    <MenuList>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                </Menu>    
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
                    users?.map((user)=>( <Usercard users={user} key={user._id}/>))
                }
            </div>
            
        </div>

      </div>

     
    </>


)}