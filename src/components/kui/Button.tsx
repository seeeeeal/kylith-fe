import clsx from "clsx";
import { Variant, Color } from "./types/Button";
import classMap from "./utils/buttonClassMap";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  shape?: "default" | "round";
  color?: Color;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const baseClass =
  "inline-flex justify-center items-center transform duration-200";
const sizeClassMap = {
  small: "h-6 text-xs px-2",
  medium: "h-8 text-sm px-4",
  large: "h-12 text-base px-4",
};
const shapeClassMap = {
  default: "rounded",
  round: "rounded-full",
};

export default function KuiButton({
  children,
  variant = "solid",
  disabled = false,
  color = "default",
  size = "medium",
  shape = "default",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseClass,
        sizeClassMap[size],
        shapeClassMap[shape],
        classMap[variant][color],
        className,
        "disabled:opacity-50 disabled:cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
}
