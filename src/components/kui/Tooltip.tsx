import React, { useState, useRef } from "react";
import clsx from "clsx";
import { TooltipPosition, TooltipVariant, TooltipSize } from "./types/Tooltip";

type TooltipProps = {
  children: React.ReactNode;
  title: string;
  position?: TooltipPosition;
  variant?: TooltipVariant;
  size?: TooltipSize;
  disabled?: boolean;
  className?: string;
};

const positionClasses = {
  top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
  left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
};

const variantClasses = {
  light: "bg-white text-gray-900 border border-gray-200",
  dark: "bg-gray-900/80 text-white",
};

const sizeClasses = {
  xsmall: "text-xxs px-1 py-0.5",
  small: "text-xs px-2 py-1",
  medium: "text-sm px-3 py-2",
  large: "text-base px-4 py-3",
};

export default function KuiTooltip({
  children,
  title,
  position = "top",
  variant = "light",
  size = "medium",
  disabled = false,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (disabled) return;
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  const handleMouseEnter = () => showTooltip();
  const handleMouseLeave = () => hideTooltip();

  return (
    <div
      ref={triggerRef}
      className={clsx("relative inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <div
        className={clsx(
          "absolute z-50 rounded shadow-lg whitespace-nowrap transition-opacity duration-200",
          positionClasses[position],
          variantClasses[variant],
          sizeClasses[size],
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        role="tooltip"
      >
        {title}
      </div>
    </div>
  );
}
