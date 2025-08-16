import { Link } from "react-router";
import type { Product } from "@/types/Product";
import PriceTag from "@/components/PriceTag";
import { KuiIconButton, KuiTag } from "@/components/kui";
import { series } from "@/assets/series";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import clsx from "clsx";
import { FiHeart } from "react-icons/fi";

const colorClassMap: Record<string, string> = {
  黒: "bg-[#575757]",
  白: "bg-[#e0dfe2]",
};

function GridCard({ product }: { product: Product }) {
  const { t } = useTranslation();
  const seriesData = series.find((s) => s.id === product.series);

  const [currentColor, setCurrentColor] = useState(product.colors[0] ?? "黒");

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="block rounded-lg p-4 bg-kui-base h-full">
      <Link to={`/products/${product.id}`} className="block relative mb-2">
        <div className="absolute top-2 left-2 flex items-center gap-1 z-10">
          {product.stock === 0 && (
            <KuiTag variant="soft" color="error" size="xsmall">
              {t("product.outOfStock")}
            </KuiTag>
          )}
        </div>

        <div className="absolute top-2 right-2 z-10">
          <KuiIconButton
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            aria-label="お気に入りに追加"
            variant="filled"
            color={isFavorite ? "error" : "default"}
            size="small"
          >
            {isFavorite ? <FiHeart fill="currentColor" /> : <FiHeart />}
          </KuiIconButton>
        </div>

        <img
          src={currentColor.image}
          alt={product.fullName}
          className="w-full h-auto rounded hover:opacity-80"
        />
      </Link>
      <div className="flex items-center gap-1 mb-1">
        <KuiTag variant="soft" color="default" size="xsmall">
          {seriesData?.description}
        </KuiTag>
      </div>
      <Link to={`/products/${product.id}`} className="block mb-2">
        <h2
          className="text-sm font-semibold leading-normal line-clamp-1 hover:underline"
          title={product.fullName}
        >
          {product.fullName}
        </h2>
      </Link>
      <div className="flex items-center gap-1.5 mb-2">
        {product.colors?.map((color) => (
          <button
            key={color.name}
            className={clsx(
              "w-3 h-3 rounded-full box-content",
              colorClassMap[color.name],
              currentColor.name === color.name && "border-2 border-kui-default"
            )}
            onClick={() => {
              setCurrentColor(color);
            }}
            aria-label={color.name}
            type="button"
            title={color.name}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <PriceTag amount={product.price} size="small" />
      </div>
    </div>
  );
}
export default GridCard;
