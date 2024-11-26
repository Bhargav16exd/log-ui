import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


//Functions checks if the user is banned or not 
export default function Checkban(){

    const ban = useSelector((state)=>state.auth?.ban)

    return (<>
      {
        ban == false  ?  <Outlet/> : <Navigate to="/ban" />
      }
    </>)

}