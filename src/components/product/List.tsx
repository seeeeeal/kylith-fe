import React, { useState, useCallback } from "react";
import ProductCard from "./Card";
import Filter from "./Filter";
import type { Product } from "@/types/Product";
import clsx from "clsx";
import { KuiButton, KuiIconButton, KuiTooltip } from "../kui";
import { FiColumns, FiFilter, FiGrid } from "react-icons/fi";
import { t } from "i18next";

type FilterConfig = {
  type: "switch" | "price" | "series";
  label: string;
  options?: string[];
};

type ProductListProps = {
  products: Product[];
  filters?: FilterConfig[];
  className?: string;
  children?: React.ReactNode;
};

function ProductList({ products, children }: ProductListProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const [showFilter, setShowFilter] = useState(true);
  const [viewType, setViewType] = useState<"grid" | "column">("grid");

  const toggleFilter = useCallback(() => {
    setShowFilter((prev) => !prev);
  }, []);

  const toggleViewType = (viewType: "grid" | "column") => {
    setViewType(viewType);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        {/* Filter */}
        <div className="flex items-center gap-1">
          <KuiTooltip
            title={
              showFilter ? t("product.hideFilter") : t("product.showFilter")
            }
            position="bottom"
            variant="dark"
            size="xsmall"
          >
            <KuiButton
              aria-label={
                showFilter ? t("product.hideFilter") : t("product.showFilter")
              }
              variant="text"
              size="small"
              onClick={toggleFilter}
              className={clsx(showFilter && "bg-kui-base")}
            >
              <FiFilter />
              <span className="ml-1 text-xxs">{t("product.filter")}</span>
            </KuiButton>
          </KuiTooltip>
        </div>

        {/* Column view or Grid view */}
        <div className="flex gap-2">
          <KuiTooltip
            title={t("product.gridView")}
            position="bottom"
            variant="dark"
            size="xsmall"
          >
            <KuiIconButton
              aria-label={t("product.gridView")}
              variant="text"
              size="small"
              onClick={() => toggleViewType("grid")}
              className={clsx(viewType === "grid" && "bg-kui-base")}
            >
              <FiGrid />
            </KuiIconButton>
          </KuiTooltip>
          <KuiTooltip
            title={t("product.columnView")}
            position="bottom"
            variant="dark"
            size="xsmall"
          >
            <KuiIconButton
              aria-label={t("product.columnView")}
              variant="text"
              size="small"
              onClick={() => toggleViewType("column")}
              className={clsx(viewType === "column" && "bg-kui-base")}
            >
              <FiColumns />
            </KuiIconButton>
          </KuiTooltip>
        </div>
      </div>
      <div
        className={clsx(
          "flex flex-col lg:flex-row gap-4 lg:gap-6",
          !showFilter && "lg:flex-col"
        )}
      >
        {/* Filter */}
        <Filter
          className={clsx(!showFilter && "hidden")}
          products={products}
          onFilterChange={setFilteredProducts}
        />

        {/* Product List */}
        <div className="flex-1 min-w-0">
          {/* Custom PR */}
          {children && <div className="mb-3 lg:mb-4">{children}</div>}

          {/* Product Grid */}
          <div
            className={clsx(
              "grid gap-3 sm:gap-4",
              viewType === "column" && "grid-cols-1",
              viewType === "grid" && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                {t("product.noResults")}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
