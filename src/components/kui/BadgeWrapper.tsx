import { ReactNode } from "react";

type BadgeWrapperProps = {
  children: ReactNode;
  badgeContent?: number | string;
  offset?: {
    top?: string;
    right?: string;
  };
  className?: string;
};

function shouldShowBadge(content: number | string | undefined) {
  return content !== undefined && content !== 0;
}

function BadgeWrapper({
  children,
  badgeContent,
  offset = { top: "0", right: "0" },
  className,
}: BadgeWrapperProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      {children}
      {shouldShowBadge(badgeContent) && (
        <span
          role="status"
          aria-label={`Badge: ${badgeContent}`}
          className="absolute z-10 top-0 right-0 translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center min-h-4 min-w-4 no-wrap px-1 rounded-full bg-kui-primary text-white font-semibold text-xxs"
          style={{
            top: offset.top,
            right: offset.right,
          }}
        >
          {badgeContent}
        </span>
      )}
    </div>
  );
}

export default BadgeWrapper;
