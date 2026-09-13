import React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";


const Button = ({
  children,
  variant="primary",
  size="md",
  className="",
  isLoading=false,
  disabled=false,
  type="button",
  ...props
}) => {



const baseStyles = `

inline-flex
items-center
justify-center
gap-2
font-semibold
rounded-xl
transition-all
duration-300
focus:outline-none
focus:ring-2
focus:ring-emerald-400/50

disabled:
opacity-50

disabled:
cursor-not-allowed

`;



const variants = {


primary:

`
bg-gradient-to-r
from-emerald-400
via-teal-400
to-cyan-400

text-slate-950

shadow-lg
shadow-emerald-500/30

hover:
shadow-emerald-400/50

hover:
scale-[1.03]

`,



secondary:

`
bg-slate-900/80

border
border-slate-700

text-slate-100

backdrop-blur-xl

hover:
border-emerald-400/50

hover:
bg-slate-800

`,




outline:

`
border
border-emerald-400/40

text-emerald-400

hover:
bg-emerald-400/10

hover:
border-emerald-400

`,




danger:

`
bg-red-600

text-white

hover:
bg-red-500

`,




glass:

`
bg-white/5

border
border-white/10

backdrop-blur-xl

text-white

hover:
bg-white/10

`

};





const sizes = {


sm:

`
px-3
py-1.5
text-xs
`,


md:

`
px-5
py-2.5
text-sm
`,


lg:

`
px-8
py-4
text-base
`


};






return (


<motion.button


whileHover={{
scale: disabled ? 1 : 1.03
}}


whileTap={{
scale: disabled ? 1 : 0.97
}}


type={type}


disabled={
disabled ||
isLoading
}


className={

`

${baseStyles}

${variants[variant]}

${sizes[size]}

${className}

`

}


{...props}


>


{


isLoading &&

<Loader2

size={18}

className="
animate-spin
"

/>


}



{children}



</motion.button>


);


};


export default Button;