import React from "react";
import { motion } from "framer-motion";


const Card = ({
  children,
  className = "",
  hoverEffect = true,
  glow = false,
  onClick,
  ...props
}) => {


return (

<motion.div


whileHover={

hoverEffect

?

{
y:-8,
scale:1.02
}

:

{}

}



transition={

{
duration:0.25,
ease:"easeOut"
}

}



onClick={onClick}



className={

`

relative
overflow-hidden

rounded-3xl

p-6

bg-slate-900/60

backdrop-blur-xl

border
border-slate-800

transition-all
duration-300


${

hoverEffect

?

`

hover:border-emerald-400/40

hover:shadow-xl

hover:shadow-emerald-500/10

`

:

""

}



${

glow

?

`

before:absolute

before:inset-0

before:bg-gradient-to-br

before:from-emerald-500/10

before:via-cyan-500/5

before:to-transparent

before:pointer-events-none

`

:

""

}



${className}

`

}



{...props}


>


{/* Animated shine effect */}

<div

className="

absolute

top-0

left-0

w-full

h-full

bg-gradient-to-r

from-transparent

via-white/5

to-transparent

translate-x-[-100%]

hover:translate-x-[100%]

transition-transform

duration-700

pointer-events-none

"

/>



<div className="relative z-10">

{children}

</div>



</motion.div>

);


};



export default Card;