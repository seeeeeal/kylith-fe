import React from "react";
import clsx from "clsx";
import { CheckboxSize } from "./types/Checkbox";

type CheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: CheckboxSize;
  className?: string;
  children?: React.ReactNode;
  name?: string;
  value?: string;
};

const sizeClasses = {
  small: "w-3 h-3",
  medium: "w-4 h-4",
  large: "w-5 h-5",
};

const labelSizeClasses = {
  small: "text-xs",
  medium: "text-sm",
  large: "text-base",
};

export default function KuiCheckbox({
  checked = false,
  onChange,
  disabled = false,
  size = "medium",
  className,
  children,
  name,
  value,
}: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e.target.checked);
    }
  };

  return (
    <label className={clsx("flex items-center cursor-pointer", className)}>
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          name={name}
          value={value}
          className={clsx(
            "appearance-none border-1 border-gray-300 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            sizeClasses[size],
            checked && "bg-kui-primary border-kui-primary",
            disabled && "opacity-50 cursor-not-allowed",
            !disabled && "hover:border-gray-400"
          )}
        />
        {checked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className={clsx(
                "text-white",
                size === "small" && "w-2 h-2",
                size === "medium" && "w-3 h-3",
                size === "large" && "w-4 h-4"
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {children && (
        <span
          className={clsx(
            "ml-2 select-none",
            labelSizeClasses[size],
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {children}
        </span>
      )}
    </label>
  );
}
