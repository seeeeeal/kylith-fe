import React, { useState, useRef, useEffect } from "react";
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
  delay?: number;
  maxWidth?: number;
};

const positionClasses = {
  top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
  left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
};

const variantClasses = {
  light: "bg-white text-gray-900 border border-gray-200 shadow-lg",
  dark: "bg-gray-900 text-white shadow-lg",
};

const sizeClasses = {
  small: "text-xs px-2 py-1",
  medium: "text-sm px-3 py-2",
  large: "text-base px-4 py-3",
};

const arrowClasses = {
  top: "top-full left-1/2 transform -translate-x-1/2 border-t-gray-200 border-l-transparent border-r-transparent border-b-transparent",
  bottom:
    "bottom-full left-1/2 transform -translate-x-1/2 border-b-gray-200 border-l-transparent border-r-transparent border-t-transparent",
  left: "left-full top-1/2 transform -translate-y-1/2 border-l-gray-200 border-t-transparent border-b-transparent border-r-transparent",
  right:
    "right-full top-1/2 transform -translate-y-1/2 border-r-gray-200 border-t-transparent border-b-transparent border-l-transparent",
};

const darkArrowClasses = {
  top: "top-full left-1/2 transform -translate-x-1/2 border-t-gray-900 border-l-transparent border-r-transparent border-b-transparent",
  bottom:
    "bottom-full left-1/2 transform -translate-x-1/2 border-b-gray-900 border-l-transparent border-r-transparent border-t-transparent",
  left: "left-full top-1/2 transform -translate-y-1/2 border-l-gray-900 border-t-transparent border-b-transparent border-r-transparent",
  right:
    "right-full top-1/2 transform -translate-y-1/2 border-r-gray-900 border-t-transparent border-b-transparent border-l-transparent",
};

export default function KuiTooltip({
  children,
  title,
  position = "top",
  variant = "light",
  size = "medium",
  disabled = false,
  className,
  delay = 200,
  maxWidth = 200,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTimeout, setShowTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [hideTimeout, setHideTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (disabled) return;

    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }

    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setShowTimeout(timeout);
  };

  const hideTooltip = () => {
    if (showTimeout) {
      clearTimeout(showTimeout);
      setShowTimeout(null);
    }

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 100);
    setHideTimeout(timeout);
  };

  const handleMouseEnter = () => showTooltip();
  const handleMouseLeave = () => hideTooltip();
  const handleFocus = () => showTooltip();
  const handleBlur = () => hideTooltip();

  // キーボードナビゲーション対応
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      hideTooltip();
    }
  };

  useEffect(() => {
    return () => {
      if (showTimeout) clearTimeout(showTimeout);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, [showTimeout, hideTimeout]);

  return (
    <div
      ref={triggerRef}
      className={clsx("relative inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
    >
      {children}

      {isVisible && (
        <div
          ref={tooltipRef}
          className={clsx(
            "absolute z-50 rounded-md pointer-events-none whitespace-nowrap",
            positionClasses[position],
            variantClasses[variant],
            sizeClasses[size]
          )}
          style={{ maxWidth: `${maxWidth}px` }}
          role="tooltip"
          aria-hidden="true"
        >
          <div className="relative">
            {title}
            {/* 矢印 */}
            <div
              className={clsx(
                "absolute w-0 h-0 border-4",
                variant === "dark"
                  ? darkArrowClasses[position]
                  : arrowClasses[position]
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}
