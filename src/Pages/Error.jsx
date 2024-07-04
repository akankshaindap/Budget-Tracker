import { useRouteError,Link ,useNavigate } from "react-router-dom"
import {  HomeIcon } from "@heroicons/react/16/solid";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
const Error = () => {
     const error = useRouteError();
     const navigate=useNavigate()

  return (
       <div className="my-32 mx-96">
            <h1 className="text-5xl">Opps! We've got some problem</h1>
            <p>{error.message ||  error.statusText}</p>
            <div className="flex justify-center m-5">
                 <button
                      onClick={()=>navigate(-1)}
                      className="flex  bg-gray-600 m-2 p-2 rounded-sm text-white">
                      <ArrowUturnLeftIcon width={20} />
                      Go Back
                 </button>
                 <Link to='/' className="flex bg-slate-500 m-2 p-2 rounded-sm text-white">
                  <HomeIcon width={20}/>
                 Go Home
                 </Link>
            </div>
    </div>
  )
}

export default Error
