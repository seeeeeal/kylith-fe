import clsx from "clsx";

type PriceProps = {
  amount: number | string;
  size?: "xsmall" | "small" | "medium" | "large";
  taxIncluded?: boolean;
  emphasis?: boolean;
};

const sizeClassMap = {
  xsmall: {
    currency: "text-xs",
    amount: "text-xs",
    taxIncluded: "text-xxs",
  },
  small: {
    currency: "text-sm",
    amount: "text-sm",
    taxIncluded: "text-xxs",
  },
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
function PriceTag({
  amount,
  size = "medium",
  taxIncluded = true,
  emphasis = true,
}: PriceProps) {
  return (
    <div className="flex gap-1 items-baseline text-kui-secondary">
      <span className={sizeClassMap[size].currency}>¥</span>
      <span
        className={clsx(
          " text-kui-default",
          emphasis && "font-semibold",
          sizeClassMap[size].amount
        )}
      >
        {amount.toLocaleString()}
      </span>
      {taxIncluded && (
        <span className={sizeClassMap[size].taxIncluded}>(税込)</span>
      )}
    </div>
  );
}

export default PriceTag;
