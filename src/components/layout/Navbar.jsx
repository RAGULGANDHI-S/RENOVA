import React, { useState } from "react";
import {
  Link,
  NavLink,
  useNavigate
} from "react-router-dom";

import {
  Sparkles,
  Globe,
  LogIn,
  LayoutDashboard,
  User,
  Menu,
  X,
  LogOut,
  ChevronDown,
  Recycle,
  BrainCircuit
} from "lucide-react";

import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import { useAuth } from "../../context/AuthContext";


const Navbar = () => {

  const { t, i18n } = useTranslation();

  const {
    user,
    logout
  } = useAuth();

  const navigate = useNavigate();


  const [mobileOpen,setMobileOpen] = useState(false);
  const [profileOpen,setProfileOpen] = useState(false);



  const toggleLanguage = () => {

    i18n.changeLanguage(
      i18n.language === "en"
        ? "ta"
        : "en"
    );

  };



  const handleLogout = async()=>{

    try{

      await logout();

      navigate("/");

    }
    catch(error){

      console.error(
        "Logout failed",
        error
      );

    }

  };



  const navLinks=[

    {
      name:t("nav.home"),
      path:"/"
    },

    {
      name:t("nav.about"),
      path:"/about"
    },

    {
      name:"AI Detection",
      path:"/ai-detection"
    },

    {
      name:t("nav.marketplace"),
      path:"/marketplace"
    },

    {
      name:t("nav.waste_management"),
      path:"/waste-management"
    },

    {
      name:t("nav.contact"),
      path:"/contact"
    }

  ];



  return (

<header
className="
sticky top-0
z-50
w-full
backdrop-blur-xl
bg-slate-950/70
border-b
border-emerald-500/10
"
>


<div
className="
max-w-7xl
mx-auto
px-5
py-4
flex
items-center
justify-between
"
>



{/* LOGO */}

<Link
to="/"
className="
flex
items-center
gap-3
group
"
>


<div
className="
relative
w-11
h-11
rounded-2xl
bg-gradient-to-br
from-emerald-400
to-cyan-500
flex
items-center
justify-center
shadow-lg
shadow-emerald-500/30
group-hover:scale-110
transition
"
>

<Sparkles
className="
w-6
h-6
text-slate-950
"
/>


</div>



<div>

<h1
className="
text-xl
font-black
tracking-tight
bg-gradient-to-r
from-emerald-400
to-cyan-400
bg-clip-text
text-transparent
"
>

RENOVA-AI

</h1>


<p
className="
text-[10px]
uppercase
tracking-[0.3em]
text-slate-400
"
>

Circular Waste Intelligence

</p>


</div>


</Link>






{/* DESKTOP MENU */}

<nav
className="
hidden
lg:flex
items-center
gap-7
"
>


{
navLinks.map((link)=>(

<NavLink

key={link.path}

to={link.path}

className={({isActive})=>

`
text-sm
font-medium
transition
relative
${

isActive

?
"text-emerald-400"

:

"text-slate-300 hover:text-emerald-300"

}

`

}

>


{link.name}


</NavLink>


))

}


</nav>






{/* ACTIONS */}

<div
className="
flex
items-center
gap-3
"
>




{/* LANGUAGE */}

<button

onClick={toggleLanguage}

className="
hidden
sm:flex
items-center
gap-2
px-3
py-2
rounded-xl
bg-slate-900
border
border-slate-700
text-xs
text-emerald-400
hover:border-emerald-400
transition
"

>


<Globe
size={16}
/>


{
i18n.language==="en"
?
"தமிழ்"
:
"English"
}


</button>






{/* AUTH */}

{
user

?

<div
className="
relative
"
>


<button

onClick={()=>setProfileOpen(!profileOpen)}

className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-gradient-to-r
from-emerald-500
to-cyan-500
text-slate-950
font-bold
text-sm
"

>


<User
size={16}
/>


{
user.name || user.role
}


<ChevronDown
size={15}
/>


</button>




<AnimatePresence>

{
profileOpen &&

<motion.div

initial={{
opacity:0,
y:-10
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-10
}}

className="
absolute
right-0
mt-3
w-48
rounded-xl
bg-slate-900
border
border-slate-700
shadow-xl
p-2
"

>


<Link

to={`/dashboard/${user.role.toLowerCase()}`}

className="
flex
items-center
gap-2
px-3
py-2
rounded-lg
text-sm
text-slate-200
hover:bg-slate-800
"

>

<LayoutDashboard size={16}/>

Dashboard

</Link>



<button

onClick={handleLogout}

className="
w-full
flex
items-center
gap-2
px-3
py-2
rounded-lg
text-sm
text-red-400
hover:bg-slate-800
"

>

<LogOut size={16}/>

Logout

</button>



</motion.div>

}

</AnimatePresence>


</div>


:

<Link

to="/login"

className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-slate-900
border
border-slate-700
text-slate-200
text-sm
hover:border-emerald-400
transition
"

>

<LogIn
size={16}
className="text-emerald-400"
/>

Login

</Link>


}





{/* MOBILE BUTTON */}

<button

className="
lg:hidden
p-2
rounded-xl
bg-slate-900
border
border-slate-700
"

onClick={()=>setMobileOpen(!mobileOpen)}

>

{
mobileOpen

?

<X/>

:

<Menu/>

}


</button>



</div>



</div>





{/* MOBILE MENU */}


<AnimatePresence>

{

mobileOpen &&

<motion.div

initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

exit={{
height:0,
opacity:0
}}

className="
lg:hidden
overflow-hidden
bg-slate-950
border-t
border-slate-800
"

>


<div
className="
px-6
py-5
space-y-4
"
>


{
navLinks.map(link=>(

<Link

key={link.path}

onClick={()=>setMobileOpen(false)}

to={link.path}

className="
block
text-slate-300
hover:text-emerald-400
"

>

{link.name}

</Link>


))

}


</div>


</motion.div>


}

</AnimatePresence>



</header>

  );

};


export default Navbar;