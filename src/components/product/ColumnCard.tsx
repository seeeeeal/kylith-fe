import { Link } from "react-router";
import type { Product } from "@/types/Product";
import PriceTag from "@/components/PriceTag";
import { KuiTag } from "@/components/kui";
import { series } from "@/assets/series";
import { useTranslation } from "react-i18next";

function ColumnCard({ product }: { product: Product }) {
  const { t } = useTranslation();
  const seriesData = series.find((s) => s.id === product.series);
  const isNew = product.status?.includes("new");

  return (
    <div className="block rounded-md p-4 bg-kui-base">
      <div className="flex gap-4">
        <img
          src={product.image}
          alt={product.fullName}
          className="w-20 h-20 rounded object-cover"
        />

        <div className="">
          <div className="flex items-center gap-1 mb-2">
            {isNew && (
              <KuiTag variant="soft" color="primary" size="xsmall">
                {t("product.new")}
              </KuiTag>
            )}
            <KuiTag variant="soft" color="default" size="xsmall">
              {seriesData?.description}
            </KuiTag>
          </div>
          <Link to={`/products/${product.id}`}>
            <h2 className="text-sm font-semibold leading-normal mb-2 hover:underline">
              {product.fullName}
            </h2>
          </Link>
          <PriceTag amount={product.price} size="small" />
        </div>
      </div>
    </div>
  );
}
export default ColumnCard;
