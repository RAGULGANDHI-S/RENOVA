// authService.js


const API_URL =
import.meta.env.VITE_API_URL ||
"http://localhost:5000/api";




const delay = (time)=>{

return new Promise(
resolve=>setTimeout(resolve,time)
);

};





export const authService = {





/*
 LOGIN USER
*/


login: async(
email,
password,
role
)=>{


try{


await delay(700);



/*
 Demo authentication

 Replace this with:

POST /auth/login

when backend is ready

*/


if(!email || !password){

throw new Error(
"Email and password required"
);

}



const user={


id:
`usr_${Date.now()}`,


name:
email
.split("@")[0]
.replace(
/[^a-zA-Z]/g,
" "
),


email,


role:
(role || "user")
.toLowerCase(),


token:
`renova_token_${Date.now()}`



};



return user;



}

catch(error){


throw error;


}


},







/*
 REGISTER USER
*/


register: async(
userData
)=>{


try{


await delay(800);



const user={


id:
`usr_${Date.now()}`,


name:
userData.name,


email:
userData.email,


role:
(
userData.role ||
"user"
)
.toLowerCase(),



token:
`renova_token_${Date.now()}`



};



return user;



}

catch(error){


throw error;


}


},








/*
 LOGOUT
*/


logout: async()=>{


await delay(300);


return true;


},







/*
 GET CURRENT USER

 Future Firebase/API support

*/


getCurrentUser: async()=>{


const user =
localStorage.getItem(
"renova_user"
);



return user
?
JSON.parse(user)
:
null;


},







/*
 TOKEN STORAGE
*/


saveToken:(token)=>{


localStorage.setItem(
"renova_token",
token
);


},




getToken:()=>{


return localStorage.getItem(
"renova_token"
);


},




removeToken:()=>{


localStorage.removeItem(
"renova_token"
);


}


};