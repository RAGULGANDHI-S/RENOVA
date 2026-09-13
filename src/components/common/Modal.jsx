import React, { useEffect } from "react";
import { X } from "lucide-react";

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-3xl",
  xl: "max-w-5xl",
};

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
  closeOnBackdrop = true,
  closeOnEsc = true,
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (!closeOnEsc) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && closeOnBackdrop) {
      onClose?.();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-6"
    >
      <div
        className={`
          w-full
          ${sizeClasses[size]}
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          shadow-2xl
          overflow-hidden
          animate-in
          fade-in
          zoom-in-95
          duration-300
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
          <h2 className="text-xl font-bold text-white">
            {title}
          </h2>

          {showCloseButton && (
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Body */}

        <div className="max-h-[70vh] overflow-y-auto p-6 text-slate-300">
          {children}
        </div>

        {/* Footer */}

        {footer && (
          <div className="border-t border-slate-800 bg-slate-950/40 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;