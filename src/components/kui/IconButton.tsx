import React from "react";
import clsx from "clsx";
import { Variant, Color } from "./types/Button";
import classMap from "./utils/buttonClassMap";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  color?: Color;
  className?: string;
  onClick?: () => void;
};

const baseClass =
  "flex justify-center items-center rounded-full transform duration-200 active:scale-95";
const sizeClassMap = {
  small: "text-sm p-1",
  medium: "text-base p-2",
  large: "text-lg p-3",
};

export default function KuiIconButton({
  children,
  variant = "solid",
  disabled = false,
  color = "default",
  size = "medium",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseClass,
        sizeClassMap[size],
        classMap[variant][color],
        className
      )}
    >
      {children}
    </button>
  );
}
