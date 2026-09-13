import React from "react";
import {
  Navigate,
  Outlet,
  useLocation
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import Loader from "../components/common/Loader";



const ProtectedRoute = ({
  allowedRoles = []
}) => {


const {
  user,
  loading
} = useAuth();



const location = useLocation();





// Checking authentication status

if(loading){

  return (

    <div
    className="
    min-h-screen
    flex
    items-center
    justify-center
    bg-slate-950
    "
    >

      <Loader/>

    </div>

  );

}





// Not logged in

if(!user){

return (

<Navigate

to="/login"

replace

state={{
from:location.pathname
}}

/>

);

}






// Role protection

if(

allowedRoles.length > 0 &&

!allowedRoles.includes(user.role)

){


return (

<Navigate

to="/unauthorized"

replace

/>

);


}





return <Outlet/>;


};



export default ProtectedRoute;