import React from "react";
import { Sparkles } from "lucide-react";

const Loader = ({
  text = "Loading...",
  size = "md",
  fullScreen = false,
  overlay = false,
  showIcon = true,
  className = "",
}) => {
  const sizes = {
    sm: {
      container: "gap-2",
      iconBox: "w-10 h-10",
      icon: "w-5 h-5",
      text: "text-xs",
    },
    md: {
      container: "gap-3",
      iconBox: "w-14 h-14",
      icon: "w-7 h-7",
      text: "text-sm",
    },
    lg: {
      container: "gap-4",
      iconBox: "w-20 h-20",
      icon: "w-10 h-10",
      text: "text-base",
    },
  };

  const current = sizes[size] || sizes.md;

  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        ${current.container}
        ${fullScreen ? "fixed inset-0 z-50 bg-slate-950" : ""}
        ${overlay ? "absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-40" : ""}
        ${className}
      `}
    >
      {showIcon && (
        <div
          className={`
            ${current.iconBox}
            rounded-2xl
            bg-gradient-to-br
            from-emerald-500
            via-teal-500
            to-cyan-500
            flex
            items-center
            justify-center
            shadow-xl
            shadow-emerald-500/30
            animate-pulse
          `}
        >
          <Sparkles
            className={`
              ${current.icon}
              text-slate-950
              animate-spin
            `}
          />
        </div>
      )}

      <div className="flex flex-col items-center">
        <h3 className="font-bold text-white tracking-wide">
          RENOVA-AI
        </h3>

        <p
          className={`
            ${current.text}
            text-slate-400
            mt-1
          `}
        >
          {text}
        </p>
      </div>

      <div className="w-44 h-1 bg-slate-800 rounded-full overflow-hidden mt-3">
        <div className="h-full w-1/2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;