import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


export default function Checkban(){

    const ban = useSelector((state)=>state.auth?.ban)

    return (<>
      {
        ban == false  ?  <Outlet/> : <Navigate to="/ban" />
      }
    </>)

}