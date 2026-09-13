import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  authService
} from "../services/authService";



const AuthContext = createContext(null);



export const AuthProvider = ({
  children
}) => {



const [user,setUser] = useState(null);


const [loading,setLoading] = useState(true);



/*
 Check existing session
*/

useEffect(()=>{


const initializeAuth = async()=>{


try{


const savedUser =
localStorage.getItem(
"renova_user"
);



if(savedUser){

setUser(
JSON.parse(savedUser)
);

}


}
catch(error){

console.error(
"Auth initialization failed",
error
);


localStorage.removeItem(
"renova_user"
);


}

finally{


setLoading(false);


}


};



initializeAuth();



},[]);







/*
 Login
*/


const login = async(
email,
password,
role
)=>{


setLoading(true);



try{


const userData =
await authService.login(
email,
password,
role
);



const formattedUser={

...userData,

role:
userData.role
?.toLowerCase()

};



setUser(
formattedUser
);



localStorage.setItem(

"renova_user",

JSON.stringify(
formattedUser
)

);



return formattedUser;



}

catch(error){


console.error(
"Login failed",
error
);


throw error;



}

finally{


setLoading(false);


}


};








/*
 Logout
*/


const logout = async()=>{


try{


await authService.logout();



}
catch(error){


console.error(
"Logout error",
error
);


}

finally{


setUser(null);


localStorage.removeItem(
"renova_user"
);


}


};








/*
 Change dashboard role
*/


const switchRole=(newRole)=>{


if(!user)
return;



const updatedUser={


...user,


role:
newRole.toLowerCase()


};



setUser(
updatedUser
);



localStorage.setItem(

"renova_user",

JSON.stringify(
updatedUser
)

);



};








return (

<AuthContext.Provider

value={

{

user,

loading,

login,

logout,

switchRole

}

}

>


{children}


</AuthContext.Provider>


);


};








export const useAuth=()=>{


const context =
useContext(AuthContext);



if(!context){


throw new Error(

"useAuth must be used inside AuthProvider"

);


}



return context;


};