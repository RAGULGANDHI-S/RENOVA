<<<<<<< HEAD
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
=======
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('renova_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (role, email, name = '') => {
    const newUser = {
      id: 'USR-' + Math.floor(1000 + Math.random() * 9000),
      role,
      email,
      name: name || `${role.charAt(0).toUpperCase() + role.slice(1)} Operator`,
      organization: role === 'hotel' ? 'Grand Regency Hotel' : role === 'restaurant' ? 'Verde Bistro' : role === 'farmer' ? 'GreenAcres Bio Farm' : role === 'vendor' ? 'EcoMetals & Plastics Co.' : role === 'delivery' ? 'Fleet Unit #409' : 'RENOVA Enterprise HQ',
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${role}`,
      token: 'renova_jwt_' + Date.now()
    };
    setUser(newUser);
    localStorage.setItem('renova_user', JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('renova_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
>>>>>>> 0795af187bcd4eea9fc84bc410602ad457b1ff2b
