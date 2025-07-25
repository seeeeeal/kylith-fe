import { useEffect, useRef, useState } from "react";
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
  success: "bg-kui-success-light text-kui-success",
  error: "bg-kui-error-light text-kui-error",
  warning: "bg-kui-warning-light text-kui-warning",
  info: "bg-kui-info-light text-kui-info",
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
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Show animation on mount
  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  // Hide animation before unmount
  useEffect(() => {
    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300);
      }, duration);
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
    return undefined;
  }, [duration, onClose]);

  const handleClose = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const Icon = icons[type];

  return (
    <div
      className={clsx(
        "fixed z-100 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out",
        typeStyles[type],
        positionStyles[position],
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      )}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      {showCloseButton && (
        <button
          onClick={handleClose}
          className="ml-2 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Close"
        >
          <FiX className="w-3 h-3" />
        </button>
      )}
    </div>
  );
}
