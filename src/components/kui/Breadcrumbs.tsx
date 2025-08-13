import React from "react";
import { Link } from "react-router";
import { FiChevronRight } from "react-icons/fi";
import clsx from "clsx";

type Crumb = {
  label: string;
  path?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
  separator?: React.ReactNode;
  className?: string;
  maxWidth?: string;
};

export default function KuiBreadcrumbs({
  items,
  separator = <FiChevronRight className="w-3 h-3" />,
  className,
  maxWidth = "max-w-[200px] sm:max-w-[16rem]",
}: BreadcrumbsProps) {
  return (
    <nav
      className={clsx("flex text-xxs text-kui-secondary", className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-1 text-kui-secondary/50" aria-hidden="true">
                {separator}
              </span>
            )}
            {item.path ? (
              <Link
                to={item.path}
                className={clsx(
                  "transition duration-200 truncate hover:text-kui-default",
                  maxWidth
                )}
                title={item.label}
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={clsx("truncate", maxWidth)}
                title={item.label}
                aria-current={index === items.length - 1 ? "page" : "false"}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
