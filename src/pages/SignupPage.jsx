import { Link } from "react-router-dom";

export const Signup = () => {
    return (
        <div className="h-screen w-screen bg-[#f3f4f6] flex justify-center items-center">

            <div className="h-auto w-[35%] flex justify-center items-center flex-col bg-[#ffffff] border rounded-lg py-4 px-6">
                <div className="w-full flex justify-center items-start flex-col my-2">

                    <h1 className=" font-semibold text-3xl my-2">Sign Up for Log</h1>
                    <p className="text-gray-500 text-sm my-2">Create your account to start blogging</p>

                </div>
                <div className="w-full flex justify-center items-start flex-col my-2">
                    <label className="my-1 font-medium">
                        Name
                    </label>
                    <input type="text" placeholder="Enter your name" className="my-1 outline-none border rounded-md w-full py-2 px-2"  />
                </div>
                <div className="w-full flex justify-center items-start flex-col my-2">
                    <label className="my-1 font-medium">
                        Password
                    </label>
                    <input type="password" placeholder="Create a password" className="my-1 outline-none border rounded-md w-full py-2 px-2"  />
                </div>
                <div className="w-full flex justify-center items-start flex-col my-2">
                    <label className="my-1 font-medium">
                        Confirm Password
                    </label>
                    <input type="password" placeholder="Confirm your password" className="my-1 outline-none border rounded-md w-full py-2 px-2"  />
                </div>
                <div className="my-1 bg-black text-white text-center border rounded-md w-full py-2 px-2">
                    Sign Up
                </div>
                <div className="text-base my-3 text-gray-600">
                    Already have an account ?  <a href="#" className="text-blue-500"> <Link to={'/login'}>Login</Link></a>
                </div>
            </div>

        </div>
    );
}