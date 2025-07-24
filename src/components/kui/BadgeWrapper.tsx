import { ReactNode } from "react";

type BadgeWrapperProps = {
  children: ReactNode;
  badgeContent?: number;
  offset?: {
    top?: string;
    right?: string;
  };
};

function BadgeWrapper({ children, badgeContent, offset }: BadgeWrapperProps) {
  return (
    <div className="relative">
      {children}
      {typeof badgeContent === "number" && badgeContent > 0 && (
        <span
          className="absolute z-auto top-0 right-0 translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center min-h-4 min-w-4 no-wrap px-1 rounded-full bg-kui-primary text-white font-semibold text-xxs"
          style={{
            top: offset?.top || "0",
            right: offset?.right || "0",
          }}
          aria-label={`${badgeContent} items`}
        >
          {badgeContent}
        </span>
      )}
    </div>
  );
}

export default BadgeWrapper;
