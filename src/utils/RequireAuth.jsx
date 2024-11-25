import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


export default function RequireAuth(){

    const isLoggedIn = useSelector((state)=>state.auth?.loggedInStatus)
    const ban        = useSelector((state)=>state.auth?.ban)

    return (<>
      {
        isLoggedIn  ? <Outlet/> : <Navigate to="/login" />
      }
    </>)

}