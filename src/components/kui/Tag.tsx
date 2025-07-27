import { ReactNode } from "react";

export type TagVariant = "solid" | "outline" | "soft";
export type TagColor =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "default";
export type TagSize = "xsmall" | "small" | "medium" | "large";

export interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  color?: TagColor;
  size?: TagSize;
  className?: string;
  onClick?: () => void;
  removable?: boolean;
  onRemove?: () => void;
}

const variantClassMap: Record<TagVariant, string> = {
  solid: "text-white",
  outline: "border bg-transparent",
  soft: "bg-opacity-10",
};

const colorClassMap: Record<TagColor, Record<TagVariant, string>> = {
  primary: {
    solid: "bg-kui-primary text-white",
    outline: "border-kui-primary text-kui-primary",
    soft: "bg-kui-primary/10 text-kui-primary",
  },
  success: {
    solid: "bg-kui-success text-white",
    outline: "border-kui-success text-kui-success",
    soft: "bg-kui-success/10 text-kui-success",
  },
  warning: {
    solid: "bg-kui-warning text-white",
    outline: "border-kui-warning text-kui-warning",
    soft: "bg-kui-warning/10 text-kui-warning",
  },
  error: {
    solid: "bg-kui-error text-white",
    outline: "border-kui-error text-kui-error",
    soft: "bg-kui-error/10 text-kui-error",
  },
  info: {
    solid: "bg-kui-info text-white",
    outline: "border-kui-info text-kui-info",
    soft: "bg-kui-info/10 text-kui-info",
  },
  default: {
    solid: "bg-gray-600 text-white",
    outline: "border-gray-600 text-gray-600",
    soft: "bg-gray-600/10 text-gray-600",
  },
};

const sizeClassMap: Record<TagSize, string> = {
  xsmall: "px-1 py-0.5 text-xxs rounded-sm leading-tight",
  small: "px-2 py-0.5 text-xs rounded-md leading-normal",
  medium: "px-3 py-1 text-sm rounded-lg leading-normal",
  large: "px-4 py-1.5 text-base rounded-lg leading-relaxed",
};

export default function Tag({
  children,
  variant = "solid",
  color = "primary",
  size = "medium",
  className = "",
  onClick,
  removable = false,
  onRemove,
}: TagProps) {
  const baseClasses =
    "inline-flex items-center gap-1 font-medium transition-colors";
  const variantClasses = variantClassMap[variant];
  const colorClasses = colorClassMap[color][variant];
  const sizeClasses = sizeClassMap[size];
  const interactiveClasses = onClick ? "cursor-pointer hover:opacity-80" : "";

  const tagClasses = [
    baseClasses,
    variantClasses,
    colorClasses,
    sizeClasses,
    interactiveClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={tagClasses}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {children}
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-1 hover:opacity-70 transition-opacity"
          aria-label="Remove tag"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
}
