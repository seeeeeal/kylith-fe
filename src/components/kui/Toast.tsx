import { useEffect } from "react";
import clsx from "clsx";
import { FiCheck, FiX, FiAlertCircle, FiInfo } from "react-icons/fi";

type ToastType = "success" | "error" | "warning" | "info";
type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "top-center"
  | "bottom-center";

type ToastProps = {
  message: string;
  type?: ToastType;
  position?: ToastPosition;
  duration?: number;
  onClose: () => void;
  showCloseButton?: boolean;
};

const typeStyles = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-white",
  info: "bg-blue-500 text-white",
};

const positionStyles = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 transform -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
};

const icons = {
  success: FiCheck,
  error: FiX,
  warning: FiAlertCircle,
  info: FiInfo,
};

export default function KuiToast({
  message,
  type = "success",
  position = "top-right",
  duration = 3000,
  onClose,
  showCloseButton = true,
}: ToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const Icon = icons[type];

  return (
    <div
      className={clsx(
        "fixed z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out opacity-100",
        typeStyles[type],
        positionStyles[position]
      )}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      {showCloseButton && (
        <button
          onClick={onClose}
          className="ml-2 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="閉じる"
        >
          <FiX className="w-3 h-3" />
        </button>
      )}
    </div>
  );
}
