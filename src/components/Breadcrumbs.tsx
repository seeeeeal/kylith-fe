import React from "react";
import { Link } from "react-router";
import { FiChevronRight } from "react-icons/fi";

type Crumb = {
  label: string;
  path?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex text-xs text-kui-secondary" aria-label="breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <span className="mx-1">
              <FiChevronRight />
            </span>
          )}
          {item.path ? (
            <Link
              to={item.path}
              className="transition duration-200 truncate max-w-[200px] sm:max-w-[16rem]"
              title={item.label}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className="truncate max-w-[200px] sm:max-w-[16rem]"
              title={item.label}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
