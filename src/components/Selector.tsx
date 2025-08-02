import clsx from "clsx";
import ReactMarkdown from "react-markdown";

type SelectorItem = {
  label: string;
  value: string;
  image?: string;
  desc?: string;
  tags?: string[];
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
  const selectedItem = items.find((item) => item.value === selected);

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
                ? "font-semibold text-kui-default ring-2 ring-kui-primary bg-kui-base"
                : "text-kui-secondary hover:bg-kui-base/50 ring-transparent hover:ring-1 hover:ring-kui-primary hover:text-kylith"
            )}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelect(item.value)}
            onClick={() => onSelect(item.value)}
          >
            {item.image && (
              <img
                className="w-16 h-16 object-contain rounded mb-2"
                src={item.image}
                alt={item.label}
              />
            )}
            <p className="text-xs">{item.label}</p>
          </li>
        ))}
      </ul>

      {/* Render the description of the currently selected item using ReactMarkdown, if available. */}
      {items.find((item) => item.value === selected)?.desc && (
        <div className="mt-4 text-xs text-gray-500 leading-relaxed [&_a]:text-kui-primary">
          <ReactMarkdown>{selectedItem!.desc!}</ReactMarkdown>

          {/* Render tags if available(mainly for switch options). */}
          <div className="text-xs text-kui-secondary/70 mt-1">
            {selectedItem?.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-kui-default/5 rounded px-1 py-0.5 text-xxs leading-none mr-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
