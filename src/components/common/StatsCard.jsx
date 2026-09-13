import React from "react";
import Card from "./Card";
import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from "lucide-react";

const colorClasses = {
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
  },
  red: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/20",
  },
};

const StatsCard = ({
  title,
  value,
  icon,
  change,
  changeType = "positive",
  description,
  color = "emerald",
  loading = false,
  onClick,
  className = "",
}) => {
  const theme = colorClasses[color] || colorClasses.emerald;

  const renderTrendIcon = () => {
    switch (changeType) {
      case "positive":
        return <ArrowUpRight className="w-4 h-4" />;
      case "negative":
        return <ArrowDownRight className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  if (loading) {
    return (
      <Card className={`animate-pulse ${className}`}>
        <div className="space-y-4">
          <div className="h-5 w-24 rounded bg-slate-800"></div>
          <div className="h-10 w-32 rounded bg-slate-800"></div>
          <div className="h-4 w-20 rounded bg-slate-800"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={`group cursor-pointer border ${theme.border} ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-slate-400 font-medium">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-black text-white tracking-tight">
            {value}
          </h2>

          {description && (
            <p className="mt-2 text-xs text-slate-500">
              {description}
            </p>
          )}
        </div>

        <div
          className={`
            w-14
            h-14
            rounded-2xl
            flex
            items-center
            justify-center
            ${theme.bg}
            ${theme.text}
            transition-transform
            duration-300
            group-hover:scale-110
          `}
        >
          {icon}
        </div>
      </div>

      {change && (
        <div className="mt-6 flex items-center justify-between">

          <div
            className={`
              inline-flex
              items-center
              gap-1
              rounded-full
              px-3
              py-1
              text-xs
              font-semibold
              ${theme.bg}
              ${theme.text}
            `}
          >
            {renderTrendIcon()}
            {change}
          </div>

          <span className="text-xs text-slate-500">
            Updated now
          </span>

        </div>
      )}
    </Card>
  );
};

export default StatsCard;