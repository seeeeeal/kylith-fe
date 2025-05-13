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
    <nav className="flex text-xs text-secondary-dark" aria-label="breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <span className="mx-0.5">
              <FiChevronRight />
            </span>
          )}
          {item.path ? (
            <Link
              to={item.path}
              className="hover:text-secondary transition duration-200 truncate max-w-[200px] sm:max-w-[16rem]"
              title={item.label}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className="text-secondary truncate max-w-[200px] sm:max-w-[16rem]"
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
