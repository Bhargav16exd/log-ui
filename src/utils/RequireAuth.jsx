import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


// Function checks if the user is logged in or not
export default function RequireAuth(){

    const isLoggedIn = useSelector((state)=>state.auth?.loggedInStatus)
    const ban        = useSelector((state)=>state.auth?.ban)

    return (<>
      {
        isLoggedIn  ? <Outlet/> : <Navigate to="/login" />
      }
    </>)

}