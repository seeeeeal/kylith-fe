import clsx from "clsx";
import { useTranslation } from "react-i18next";

type PriceProps = {
  amount: number | string;
  size?: "xsmall" | "small" | "medium" | "large";
  taxIncluded?: boolean;
};

const sizeClassMap = {
  xsmall: {
    currency: "text-xs",
    amount: "text-xs font-medium",
    taxIncluded: "text-xxs",
  },
  small: {
    currency: "text-sm",
    amount: "text-sm font-medium",
    taxIncluded: "text-xxs",
  },
  medium: {
    currency: "text-lg",
    amount: "text-lg font-medium",
    taxIncluded: "text-xs",
  },
  large: {
    currency: "text-3xl",
    amount: "text-3xl font-semibold",
    taxIncluded: "text-xs",
  },
};
function PriceTag({ amount, size = "medium", taxIncluded = true }: PriceProps) {
  const { t } = useTranslation();
  return (
    <div className="flex gap-1 items-baseline text-kui-secondary">
      <span className={sizeClassMap[size].currency}>¥</span>
      <span className={clsx(" text-kui-default", sizeClassMap[size].amount)}>
        {amount.toLocaleString()}
      </span>
      {taxIncluded && (
        <span className={sizeClassMap[size].taxIncluded}>
          ({t("price.taxIncluded")})
        </span>
      )}
    </div>
  );
}

export default PriceTag;
