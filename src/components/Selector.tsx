import React from "react";
import clsx from "clsx";

type SelectorItem = {
  label: string;
  value: string;
  image?: string;
};

type SelectorProps = {
  title: string;
  selected: string;
  onSelect: (value: string) => void;
  items: SelectorItem[];
};

export default function Selector({
  title,
  selected,
  onSelect,
  items,
}: SelectorProps) {
  return (
    <div>
      <div>
        <h3 className="text-lg">{title}</h3>
      </div>
      <ul className="mt-2 flex space-x-2">
        {items.map((item) => (
          <li
            key={item.value}
            className={clsx(
              "relative cursor-pointer rounded-lg flex flex-col p-2 duration-200",
              item.image && "min-w-[6em] max-w-[10em]",
              selected === item.value
                ? "font-semibold bg-gray-100 text-kylith ring-2 ring-kylith-accent"
                : "text-secondary hover:bg-gray-50 hover:ring-1 hover:ring-kylith-accent/50 hover:text-kylith ring-transparent"
            )}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelect(item.value)}
            onClick={() => onSelect(item.value)}
          >
            {item.image && (
              <img
                className="w-12 h-12 mb-2"
                src={item.image}
                alt={item.label}
              />
            )}
            <p className="text-xs">{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
