import { Link } from "react-router-dom";

export const YouAreBanned = () => {
  return (
    <>
      {/* Navbar */}
      <div className="h-20 border border-b-[1px] flex py-2 bg-gray-100">

        <div className="h-full w-full flex justify-start items-center px-10 font-semibold text-2xl text-red-600">
          Account Suspended
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center min-h-[90vh] bg-gray-50">
        <div className="text-center p-6 max-w-[600px] border rounded-md shadow-md bg-white">
          <h1 className="text-3xl font-bold text-red-600 mb-2">
            You Are Banned!
          </h1>
          <p className="text-gray-600 mb-4">
            Your account has been suspended due to a violation of our terms and
            policies. If you believe this is a mistake, please contact support.
          </p>
          <Link to="/">
            <div className="py-2 px-6 mt-4 border border-gray-300 rounded-md hover:bg-gray-200 cursor-pointer inline-block">
              Go Back to Homepage
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
