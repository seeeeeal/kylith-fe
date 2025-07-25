import { ReactNode } from "react";

interface NavigationDropdownProps {
  isOpen: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children: ReactNode;
  className?: string;
}

export default function NavigationDropdown({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  children,
  className = "",
}: NavigationDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Dropdown - positioned relative to navigation */}
      <div
        className={`absolute top-full left-0 right-0 bg-white z-40 shadow-lg border-t border-kui-border/20 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } ${className}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation dropdown"
        onMouseEnter={isOpen ? onMouseEnter : undefined}
        onMouseLeave={isOpen ? onMouseLeave : undefined}
      >
        {/* Content */}
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </div>
    </>
  );
}
