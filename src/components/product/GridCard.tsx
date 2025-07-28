import { Link } from "react-router";
import type { Product } from "@/types/Product";
import PriceTag from "@/components/PriceTag";
import { KuiTag } from "@/components/kui";
import { series } from "@/assets/series";
import { useTranslation } from "react-i18next";

function GridCard({ product }: { product: Product }) {
  const { t } = useTranslation();
  const seriesData = series.find((s) => s.id === product.series);
  const isNew = product.status?.includes("new");

  return (
    <Link
      to={`/products/${product.id}`}
      className="block rounded-lg p-4 bg-kui-base"
    >
      <img
        src={product.image}
        alt={product.fullName}
        className="w-full h-auto rounded mb-4"
      />
      <div className="flex items-center gap-1 mb-1">
        {isNew && (
          <KuiTag variant="soft" color="primary" size="xsmall">
            {t("product.new")}
          </KuiTag>
        )}
        <KuiTag variant="soft" color="default" size="xsmall">
          {seriesData?.description}
        </KuiTag>
      </div>
      <h2 className="text-base font-semibold leading-normal mb-0.5">
        {product.fullName}
      </h2>
      <PriceTag amount={product.price} size="medium" />
    </Link>
  );
}
export default GridCard;
