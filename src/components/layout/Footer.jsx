import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Leaf,
  Heart,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Recycle,
  BrainCircuit,
  MapPin
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Footer = () => {


const currentYear = new Date().getFullYear();



const platformLinks=[
  {
    title:"AI Waste Detection",
    path:"/ai-detection"
  },
  {
    title:"Waste Management",
    path:"/waste-management"
  },
  {
    title:"Marketplace",
    path:"/marketplace"
  },
  {
    title:"Reports & Analytics",
    path:"/reports"
  }
];



const stakeholderLinks=[
  {
    title:"Hotels",
    path:"/login"
  },
  {
    title:"Restaurants",
    path:"/login"
  },
  {
    title:"Farmers",
    path:"/login"
  },
  {
    title:"Recycling Vendors",
    path:"/login"
  }
];



return (

<footer

className="
relative
overflow-hidden
bg-slate-950
border-t
border-emerald-500/10
px-6
pt-16
pb-8
text-slate-400
"

>


{/* Background Glow */}

<div

className="
absolute
top-0
left-1/3
w-96
h-96
bg-emerald-500/10
blur-3xl
rounded-full
"
/>



<div

className="
relative
max-w-7xl
mx-auto
"

>


<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-10
"

>


{/* BRAND */}

<motion.div

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

className="
lg:col-span-2
space-y-5
"

>


<Link

to="/"

className="
flex
items-center
gap-3
"

>


<div

className="
w-12
h-12
rounded-2xl
bg-gradient-to-br
from-emerald-400
to-cyan-500
flex
items-center
justify-center
shadow-lg
shadow-emerald-500/30
"

>

<Sparkles

className="
text-slate-950
w-7
h-7
"

/>

</div>



<div>

<h2

className="
text-2xl
font-black
bg-gradient-to-r
from-emerald-400
to-cyan-400
text-transparent
bg-clip-text
"

>

RENOVA-AI

</h2>


<p

className="
text-xs
tracking-[0.3em]
uppercase
"

>

Circular Intelligence

</p>


</div>


</Link>



<p

className="
max-w-md
text-sm
leading-relaxed
"

>

An AI-powered circular economy platform transforming organic waste into sustainable resources through intelligent detection, tracking and recycling.

</p>




<div

className="
flex
items-center
gap-4
"

>

<a

href="#"

className="
p-2
rounded-lg
bg-slate-900
hover:text-emerald-400
transition
"

>

<Github size={18}/>

</a>


<a

href="#"

className="
p-2
rounded-lg
bg-slate-900
hover:text-emerald-400
transition
"

>

<Linkedin size={18}/>

</a>


<a

href="#"

className="
p-2
rounded-lg
bg-slate-900
hover:text-emerald-400
transition
"

>

<Twitter size={18}/>

</a>


</div>



</motion.div>






{/* PLATFORM */}


<div>

<h3

className="
text-white
font-semibold
mb-5
"

>

Platform

</h3>


<ul className="space-y-3">

{

platformLinks.map(item=>(

<li key={item.path}>

<Link

to={item.path}

className="
text-sm
hover:text-emerald-400
transition
"

>

{item.title}

</Link>


</li>

))

}

</ul>

</div>







{/* USERS */}

<div>

<h3

className="
text-white
font-semibold
mb-5
"

>

For Users

</h3>


<ul className="space-y-3">

{

stakeholderLinks.map(item=>(

<li key={item.title}>

<Link

to={item.path}

className="
text-sm
hover:text-emerald-400
transition
"

>

{item.title}

</Link>


</li>

))

}

</ul>

</div>







{/* CONTACT */}

<div>

<h3

className="
text-white
font-semibold
mb-5
"

>

Contact

</h3>



<div

className="
space-y-4
text-sm
"

>


<p className="flex gap-2">

<Mail
size={16}
className="text-emerald-400"
/>

support@renova-ai.com

</p>



<p className="flex gap-2">

<MapPin
size={16}
className="text-emerald-400"
/>

India

</p>



<div

className="
p-4
rounded-xl
bg-slate-900
border
border-emerald-500/20
"

>


<div

className="
flex
items-center
gap-2
text-emerald-400
font-semibold
"

>

<Leaf size={16}/>

Zero Waste Mission

</div>



<p

className="
text-xs
mt-2
"

>

Building sustainable communities with AI-powered recycling.

</p>


</div>


</div>


</div>


</div>







{/* BOTTOM */}


<div

className="
mt-12
pt-6
border-t
border-slate-800
flex
flex-col
md:flex-row
justify-between
items-center
gap-4
text-xs
"

>


<div

className="
flex
items-center
gap-2
"

>


<ShieldCheck

size={16}

className="text-emerald-400"

/>


Enterprise Ready AI Platform

</div>




<p>

© {currentYear} RENOVA-AI. All rights reserved.

</p>



</div>



</div>


</footer>

);


};



export default Footer;