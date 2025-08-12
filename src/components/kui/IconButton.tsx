import clsx from "clsx";
import { Variant, Color } from "./types/Button";
import classMap from "./utils/buttonClassMap";

type IconButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  color?: Color;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  "aria-label"?: string;
  "aria-describedby"?: string;
};

const baseClass =
  "inline-flex justify-center items-center rounded-full transform duration-200";
const sizeClassMap = {
  small: "w-6 h-6 text-xs",
  medium: "w-8 h-8 text-sm",
  large: "w-12 h-12 text-base",
};

export default function KuiIconButton({
  children,
  "aria-label": ariaLabel = "",
  "aria-describedby": ariaDescribedby,
  variant = "solid",
  disabled = false,
  color = "default",
  size = "medium",
  className,
  type = "button",
  onClick,
}: IconButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      type={type}
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
