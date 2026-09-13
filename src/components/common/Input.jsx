import React, { useState, forwardRef } from "react";
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react";

const Input = forwardRef(
  (
    {
      label,
      name,
      type = "text",
      value,
      onChange,
      onBlur,

      placeholder = "",
      icon,

      error,
      success,

      required = false,
      disabled = false,
      readOnly = false,

      helperText,
      className = "",

      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);

    const inputType =
      type === "password"
        ? showPassword
          ? "text"
          : "password"
        : type;

    return (
      <div className={`w-full ${className}`}>
        {label && (
          <label
            htmlFor={name}
            className="block mb-2 text-sm font-semibold text-slate-300"
          >
            {label}

            {required && (
              <span className="text-red-400 ml-1">*</span>
            )}
          </label>
        )}

        <div
          className={`
            relative flex items-center rounded-xl
            border transition-all duration-300
            ${
              error
                ? "border-red-500"
                : success
                ? "border-emerald-500"
                : focused
                ? "border-emerald-500"
                : "border-slate-700"
            }
            bg-slate-900
          `}
        >
          {icon && (
            <div className="pl-4 text-slate-400">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={name}
            name={name}
            type={inputType}
            value={value}
            onChange={onChange}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
            onFocus={() => setFocused(true)}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            className={`
              w-full
              bg-transparent
              px-4
              py-3
              outline-none
              text-white
              placeholder:text-slate-500
              disabled:opacity-50
            `}
            {...props}
          />

          {type === "password" && (
            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="px-4 text-slate-400 hover:text-white transition"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          )}

          {success && !error && (
            <CheckCircle2
              className="mr-4 text-emerald-400"
              size={18}
            />
          )}

          {error && (
            <AlertCircle
              className="mr-4 text-red-400"
              size={18}
            />
          )}
        </div>

        {helperText && !error && (
          <p className="mt-2 text-xs text-slate-500">
            {helperText}
          </p>
        )}

        {error && (
          <p className="mt-2 text-xs text-red-400">
            {error}
          </p>
        )}

        {success && !error && (
          <p className="mt-2 text-xs text-emerald-400">
            {success}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;