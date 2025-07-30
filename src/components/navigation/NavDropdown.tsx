import { ReactNode } from "react";

interface NavDropdownProps {
  isOpen: boolean;
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onToggle?: () => void;
}

export default function NavDropdown({
  isOpen,
  children,
  onMouseEnter,
  onMouseLeave,
}: NavDropdownProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10"
          style={{ top: "var(--header-height, 80px)" }}
        />
      )}

      {/* Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white transition-all duration-150 ease-out transform z-20 ${
          isOpen
            ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
            : "opacity-0 -translate-y-2 scale-y-95 pointer-events-none"
        }`}
        style={{
          transformOrigin: "top",
        }}
        onMouseEnter={isOpen ? onMouseEnter : undefined}
        onMouseLeave={isOpen ? onMouseLeave : undefined}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </div>
    </>
  );
}
