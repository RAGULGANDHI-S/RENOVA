<<<<<<< HEAD
import React from "react";
import {
  ArrowRight,
  Bot,
  Cpu,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  ScanLine,
  Database,
  Users,
  Factory,
  Truck,
  Sprout,
  BarChart3
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Button from "../components/common/Button";
import Card from "../components/common/Card";



const Home = () => {



const features = [

{
icon:<Bot/>,
title:"AI Waste Vision",
description:
"YOLO-powered computer vision detects and classifies waste materials instantly with high accuracy."
},

{
icon:<Recycle/>,
title:"Circular Economy",
description:
"Convert organic waste into valuable resources through intelligent recycling workflows."
},

{
icon:<Database/>,
title:"Smart Tracking",
description:
"Track waste generation, collection and processing with real-time analytics."
},

{
icon:<BarChart3/>,
title:"AI Analytics",
description:
"Generate sustainability insights using advanced data intelligence."
}

];




const workflow=[

{
step:"01",
title:"Detect",
icon:<ScanLine/>,
text:"AI camera detects waste type and category."
},

{
step:"02",
title:"Collect",
icon:<Truck/>,
text:"Smart pickup network connects waste generators."
},

{
step:"03",
title:"Convert",
icon:<Factory/>,
text:"Organic waste is processed into fertilizer."
},

{
step:"04",
title:"Reuse",
icon:<Sprout/>,
text:"Farmers use sustainable resources."
}

];



const stats=[

{
number:"10K+",
label:"Waste Items Detected"
},

{
number:"500+",
label:"Connected Businesses"
},

{
number:"50+",
label:"Farmers Empowered"
},

{
number:"90%",
label:"Waste Recovery Goal"
}

];



const users=[

{
title:"Hotels",
icon:<Factory/>
},

{
title:"Restaurants",
icon:<Users/>
},

{
title:"Vendors",
icon:<Recycle/>
},

{
title:"Farmers",
icon:<Sprout/>
},

{
title:"Delivery",
icon:<Truck/>
}

];





return (

<div

className="
min-h-screen
bg-black
text-white
overflow-hidden
"

>



<Navbar/>





{/* HERO */}


<section

className="
relative
min-h-[90vh]
flex
items-center
justify-center
px-6
"

>


<div

className="
absolute
w-[700px]
h-[700px]
bg-emerald-500/20
blur-[150px]
rounded-full
"

></div>



<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
relative
max-w-6xl
text-center
"

>


<div

className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
border
border-emerald-400/30
bg-emerald-500/10
text-emerald-400
text-sm
mb-8
"

>

<Sparkles size={18}/>

AI Powered Circular Economy

</div>




<h1

className="
text-5xl
md:text-8xl
font-black
leading-tight
"

>


Transform Waste

<br/>


<span

className="
bg-gradient-to-r
from-emerald-400
via-cyan-400
to-green-300
bg-clip-text
text-transparent
"

>

Into Sustainable Value

</span>


</h1>




<p

className="
mt-8
text-lg
md:text-xl
text-slate-400
max-w-3xl
mx-auto
"

>

RENOVA-AI uses artificial intelligence,
computer vision and circular economy technology
to transform waste management into a smarter future.

</p>




<div

className="
flex
justify-center
gap-5
mt-10
flex-wrap
"

>


<Link to="/login">

<Button size="lg">

Start Revolution

<ArrowRight/>

</Button>


</Link>



<Link to="/ai-detection">

<Button

variant="secondary"

size="lg"

>

<Bot/>

Try AI Detection

</Button>


</Link>



</div>


</motion.div>


</section>







{/* AI SCANNER */}



<section

className="
px-6
py-20
"

>


<div

className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
"

>


<div>


<h2

className="
text-4xl
font-bold
"

>

AI Waste Intelligence

</h2>



<p

className="
text-slate-400
mt-5
leading-relaxed
"

>

Our computer vision engine identifies waste categories,
separates organic and inorganic materials,
and creates intelligent recycling decisions.

</p>



<div

className="
mt-8
space-y-4
"

>

<div className="flex gap-3">

<Cpu className="text-emerald-400"/>

YOLO Detection Engine

</div>


<div className="flex gap-3">

<ShieldCheck className="text-emerald-400"/>

Confidence Based Classification

</div>


<div className="flex gap-3">

<Leaf className="text-emerald-400"/>

Sustainable Processing

</div>


</div>


</div>





<div

className="
relative
rounded-3xl
border
border-emerald-400/20
bg-slate-900/60
p-8
"

>


<div

className="
aspect-video
rounded-2xl
bg-black
border
border-slate-800
flex
items-center
justify-center
relative
overflow-hidden
"

>


<div

className="
absolute
inset-0
bg-gradient-to-b
from-transparent
via-emerald-500/20
to-transparent
animate-pulse
"

></div>



<div

className="
text-center
"

>

<ScanLine

size={60}

className="
text-emerald-400
mx-auto
"

/>


<p

className="
mt-4
text-emerald-400
"

>

Scanning Waste Object...

</p>


<p

className="
text-sm
text-slate-500
"

>

Organic Waste
98.4% Confidence

</p>


</div>


</div>


</div>


</div>


</section>








{/* WORKFLOW */}



<section

className="
py-20
px-6
"

>


<h2

className="
text-center
text-4xl
font-bold
"

>

How RENOVA Works

</h2>



<div

className="
max-w-6xl
mx-auto
grid
md:grid-cols-4
gap-6
mt-12
"

>


{
workflow.map(item=>(

<Card key={item.step}>


<div className="text-emerald-400">

{item.icon}

</div>


<h3 className="text-xl font-bold mt-4">

{item.step}

</h3>


<h4 className="font-semibold">

{item.title}

</h4>


<p className="text-slate-400 text-sm mt-2">

{item.text}

</p>


</Card>

))

}


</div>


</section>







{/* FEATURES */}



<section

className="
py-20
px-6
bg-slate-950
"

>


<h2

className="
text-center
text-4xl
font-bold
"

>

Future Of Waste Management

</h2>



<div

className="
max-w-6xl
mx-auto
grid
md:grid-cols-4
gap-6
mt-12
"

>


{
features.map(item=>(

<Card key={item.title}>


<div className="text-emerald-400">

{item.icon}

</div>


<h3 className="font-bold text-xl mt-5">

{item.title}

</h3>


<p className="text-slate-400 text-sm mt-3">

{item.description}

</p>


</Card>

))

}


</div>


</section>








{/* STATS */}



<section

className="
py-20
px-6
"

>


<div

className="
max-w-6xl
mx-auto
grid
grid-cols-2
md:grid-cols-4
gap-8
"

>


{
stats.map(stat=>(

<div

key={stat.label}

className="
text-center
"

>

<h3

className="
text-4xl
font-black
text-emerald-400
"

>

{stat.number}

</h3>


<p

className="
text-slate-400
mt-2
"

>

{stat.label}

</p>


</div>


))

}


</div>


</section>






{/* USERS */}



<section

className="
py-20
px-6
"

>


<h2

className="
text-center
text-4xl
font-bold
"

>

Built For Everyone

</h2>



<div

className="
max-w-5xl
mx-auto
flex
flex-wrap
justify-center
gap-6
mt-10
"

>


{
users.map(user=>(

<div

key={user.title}

className="
px-8
py-6
rounded-2xl
bg-slate-900
border
border-slate-800
flex
items-center
gap-3
"

>


<span className="text-emerald-400">

{user.icon}

</span>


{user.title}


</div>

))

}


</div>


</section>







{/* CTA */}



<section

className="
py-24
px-6
"

>


<div

className="
max-w-5xl
mx-auto
rounded-3xl
bg-gradient-to-r
from-emerald-500/20
to-cyan-500/20
border
border-emerald-400/20
p-12
text-center
"

>


<h2

className="
text-4xl
font-black
"

>

Join The Waste Revolution

</h2>


<p className="text-slate-400 mt-4">

Build a cleaner planet with artificial intelligence.

</p>


<Link to="/register">

<Button className="mt-8">

Create Account

</Button>


</Link>


</div>


</section>





<Footer/>


</div>


);


};


export default Home;
=======
import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { FloatingParticles } from '../components/three/FloatingParticles';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { DetectionDemo } from '../components/detection/DetectionDemo';
import { Workflow } from '../components/workflow/Workflow';
import { Impact } from '../components/impact/Impact';
import { Partners } from '../components/partners/Partners';
import { Testimonials } from '../components/testimonials/Testimonials';
import { FAQ } from '../components/faq/FAQ';
import { Contact } from '../components/contact/Contact';

export const Home = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#090d16' }}>
      <FloatingParticles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <DetectionDemo />
        <Workflow />
        <Impact />
        <Partners />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
>>>>>>> 0795af187bcd4eea9fc84bc410602ad457b1ff2b
