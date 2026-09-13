import React, { useEffect } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Info,
  XCircle,
  X,
} from "lucide-react";

const toastStyles = {
  success: {
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    border: "border-emerald-500/30",
    progress: "bg-emerald-500",
  },
  error: {
    icon: <XCircle className="w-5 h-5 text-red-400" />,
    border: "border-red-500/30",
    progress: "bg-red-500",
  },
  warning: {
    icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    border: "border-amber-500/30",
    progress: "bg-amber-500",
  },
  info: {
    icon: <Info className="w-5 h-5 text-cyan-400" />,
    border: "border-cyan-500/30",
    progress: "bg-cyan-500",
  },
};

const Toast = ({
  type = "success",
  title,
  message,
  duration = 4000,
  onClose,
  actionLabel,
  onAction,
}) => {
  const style = toastStyles[type] || toastStyles.success;

  useEffect(() => {
    if (!onClose) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`
        fixed
        bottom-6
        right-6
        z-50
        w-[360px]
        overflow-hidden
        rounded-2xl
        border
        ${style.border}
        bg-slate-900
        shadow-2xl
        backdrop-blur-xl
      `}
    >
      {/* Progress */}

      <div
        className={`h-1 w-full ${style.progress}`}
        style={{
          animation: `toastProgress ${duration}ms linear forwards`,
        }}
      />

      <div className="flex gap-4 p-5">

        <div>{style.icon}</div>

        <div className="flex-1">

          {title && (
            <h4 className="font-semibold text-white">
              {title}
            </h4>
          )}

          <p className="mt-1 text-sm text-slate-300">
            {message}
          </p>

          {actionLabel && (
            <button
              onClick={onAction}
              className="mt-3 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
            >
              {actionLabel}
            </button>
          )}

        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-slate-500 transition hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}

      </div>
    </div>
  );
};

export default Toast;