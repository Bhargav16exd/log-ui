import { Link } from "react-router-dom"
import { Homelayout } from "../layout/Homelayout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getLogsAPI } from "../redux/slices/userSlice"
import { Logcard } from "../components/Logcard"

export const Adminpage = () => {

    const dispatch = useDispatch()

    // Get all logs from redux store
    const logs = useSelector((state)=>state.users?.logs)

    async function getLogs(){

        // Calls getLogsAPI to get all logs
        await dispatch(getLogsAPI())
    }

    // Get all logs on page load
    useEffect(()=>{
        getLogs()
    },[])

    return(

        <Homelayout>

            <div className="h-ful px-10">

                {/* Admin Dashboard Title */}
                <div className="w-full py-4 px-4 flex">
                    <div className="w-1/2 text-3xl font-semibold my-2">
                     Admin Dashboard
                    </div>
                    <div className="w-1/2 flex justify-end ">
                        <button className="border py-2 px-4 rounded-md hover:bg-black hover:text-white transition-colors ease-linear delay-150">
                            <Link to='/home'>Back to homepage</Link>
                        </button>
                    </div>
                </div>

                <div className="w-auto py-2 px-2 mx-4 my-4  bg-blue-gray-50 rounded-md ">
                    <div className="inline">
                      View Logs
                    </div>
                </div>

                <div className="w-full py-4 px-2 flex mx-4 rounded-lg ">
                    <div className="w-1/4 flex justify-start items-center ">Action</div>
                    <div className="w-1/4 flex justify-start items-center">User</div>
                    <div className="w-1/4 flex justify-start items-center">Target</div>
                    <div className="w-1/4 flex justify-start items-center">Timestamp</div>
                </div>

                {/* Gets the logs array from the redux store and maps over it to display each log */}
                {
                    logs.map((log)=>(<Logcard key={log._id} log={log}/>))
                }

            </div>

        </Homelayout>
    )
}