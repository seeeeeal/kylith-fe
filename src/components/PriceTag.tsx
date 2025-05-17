import clsx from "clsx";

type PriceProps = {
  amount: number | string;
  size?: "medium" | "large";
  taxIncluded?: boolean;
};

const sizeClassMap = {
  medium: {
    currency: "text-lg",
    amount: "text-lg",
    taxIncluded: "text-xs",
  },
  large: {
    currency: "text-3xl",
    amount: "text-3xl",
    taxIncluded: "text-xs",
  },
};
function PriceTag({ amount, size = "medium", taxIncluded = true }: PriceProps) {
  return (
    <div className="flex gap-1 items-baseline">
      <span className={clsx("text-kui-secondary", sizeClassMap[size].currency)}>
        ¥
      </span>
      <span className={clsx("font-semibold", sizeClassMap[size].amount)}>
        {amount.toLocaleString()}
      </span>
      {taxIncluded && (
        <span
          className={clsx("text-kui-secondary", sizeClassMap[size].taxIncluded)}
        >
          税込
        </span>
      )}
    </div>
  );
}

export default PriceTag;
