import React, { useState } from "react";
import {
  useNavigate,
  Link
} from "react-router-dom";

import {
  Sparkles,
  LogIn,
  Shield,
  Building2,
  Utensils,
  Store,
  Sprout,
  Truck,
  Eye,
  EyeOff
} from "lucide-react";

import { motion } from "framer-motion";

import {
  useAuth
} from "../context/AuthContext";


import Button from "../components/common/Button";
import Card from "../components/common/Card";




const Login = () => {



const navigate = useNavigate();


const {
login,
loading
}=useAuth();



const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [showPassword,setShowPassword]=useState(false);


const [selectedRole,setSelectedRole]=useState("admin");


const [error,setError]=useState("");






const roles=[

{
label:"admin",
name:"Admin",
icon:<Shield size={18}/>
},

{
label:"hotel",
name:"Hotel",
icon:<Building2 size={18}/>
},

{
label:"restaurant",
name:"Restaurant",
icon:<Utensils size={18}/>
},

{
label:"vendor",
name:"Vendor",
icon:<Store size={18}/>
},

{
label:"farmer",
name:"Farmer",
icon:<Sprout size={18}/>
},

{
label:"delivery",
name:"Delivery",
icon:<Truck size={18}/>
}

];






const handleSubmit=async(e)=>{


e.preventDefault();


setError("");



try{


const user =
await login(
email,
password,
selectedRole
);



navigate(
`/dashboard/${user.role}`
);



}

catch(err){


setError(
err.message ||
"Login failed"
);


}


};







return (

<div

className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
p-6
relative
overflow-hidden
"


>


<div

className="
absolute
w-[500px]
h-[500px]
bg-emerald-500/20
blur-[150px]
rounded-full
"

/>





<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

>


<Card

className="
w-full
max-w-md
border
border-emerald-500/20
"

>


<div

className="
text-center
mb-8
"

>


<div

className="
w-14
h-14
mx-auto
rounded-2xl
bg-gradient-to-br
from-emerald-400
to-cyan-400
flex
items-center
justify-center
text-black
"

>

<Sparkles/>

</div>



<h1

className="
text-3xl
font-black
mt-4
"

>

RENOVA-AI

</h1>



<p

className="
text-slate-400
text-sm
"

>

Enter your sustainability portal

</p>


</div>





<form

onSubmit={handleSubmit}

className="
space-y-5
"

>



<div>


<label className="
text-xs
text-slate-400
">

Select Role

</label>



<div

className="
grid
grid-cols-3
gap-2
mt-2
"

>


{

roles.map(role=>(


<button


key={role.label}


type="button"


onClick={()=>
setSelectedRole(role.label)
}


className={

`

p-3
rounded-xl
border
text-xs
flex
flex-col
items-center
gap-2

transition

${

selectedRole===role.label

?

"bg-emerald-500/20 border-emerald-400 text-emerald-400"

:

"bg-slate-900 border-slate-800 text-slate-400"

}

`

}


>


{role.icon}


{role.name}


</button>


))

}



</div>


</div>








<div>

<label className="
text-xs
text-slate-400
">

Email

</label>


<input

type="email"

value={email}

onChange={
e=>setEmail(e.target.value)
}

placeholder="name@example.com"

className="
w-full
mt-2
px-4
py-3
rounded-xl
bg-slate-900
border
border-slate-800
outline-none
focus:border-emerald-400
"

/>


</div>







<div>


<label className="
text-xs
text-slate-400
">

Password

</label>



<div className="relative">


<input


type={
showPassword
?
"text"
:
"password"
}


value={password}

onChange={
e=>setPassword(e.target.value)
}


className="
w-full
mt-2
px-4
py-3
rounded-xl
bg-slate-900
border
border-slate-800
outline-none
focus:border-emerald-400
"

/>



<button

type="button"

onClick={()=>
setShowPassword(!showPassword)
}

className="
absolute
right-3
top-5
text-slate-400
"

>


{

showPassword

?

<EyeOff size={18}/>

:

<Eye size={18}/>

}


</button>



</div>



</div>





{

error &&

<p className="
text-red-400
text-sm
">

{error}

</p>

}





<Button

type="submit"

className="
w-full
"

isLoading={loading}

>


<LogIn size={18}/>

Login as {selectedRole}



</Button>






<p

className="
text-center
text-sm
text-slate-500
"

>

New organization?

{" "}

<Link

to="/register"

className="
text-emerald-400
"

>

Create account

</Link>


</p>



</form>



</Card>



</motion.div>



</div>


);


};


export default Login;