import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";
import { KuiButton } from "./kui";
import { FiFilter, FiX } from "react-icons/fi";

type FilterConfig = {
  type: "layout" | "switch" | "price";
  label: string;
  options?: string[];
};

type ProductListProps = {
  products: Product[];
  filters?: FilterConfig[];
  className?: string;
  children?: React.ReactNode;
};

function ProductList({
  products,
  filters = [
    { type: "layout", label: "レイアウト" },
    { type: "switch", label: "スイッチ" },
    { type: "price", label: "価格範囲" },
  ],
  className,
  children,
}: ProductListProps) {
  const [selectedLayout, setSelectedLayout] = useState<string>("all");
  const [selectedSwitch, setSelectedSwitch] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [showFilters, setShowFilters] = useState(false);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Layout Filter
      if (selectedLayout !== "all" && product.layout !== selectedLayout) {
        return false;
      }

      // Switch Filter
      if (
        selectedSwitch !== "all" &&
        product.switches &&
        !product.switches.includes(selectedSwitch)
      ) {
        return false;
      }

      // Price Filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      return true;
    });
  }, [products, selectedLayout, selectedSwitch, priceRange]);

  // Get Available Layouts and Switches
  const availableLayouts = useMemo(() => {
    const layouts = [...new Set(products.map((p) => p.layout))];
    return layouts;
  }, [products]);

  const availableSwitches = useMemo(() => {
    const switches = [...new Set(products.flatMap((p) => p.switches || []))];
    return switches;
  }, [products]);

  const clearFilters = () => {
    setSelectedLayout("all");
    setSelectedSwitch("all");
    setPriceRange([0, 20000]);
  };

  const hasLayoutFilter = filters.some((f) => f.type === "layout");
  const hasSwitchFilter = filters.some((f) => f.type === "switch");
  const hasPriceFilter = filters.some((f) => f.type === "price");

  return (
    <div
      className={`flex flex-col lg:flex-row gap-4 lg:gap-6 ${className || ""}`}
    >
      {/* Filter */}
      <div className="w-full lg:w-64 lg:flex-shrink-0">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <KuiButton
            onClick={() => setShowFilters(!showFilters)}
            variant="text"
            size="medium"
            className="w-full border border-gray-300"
          >
            <FiFilter className="mr-2" />
            フィルター {showFilters ? <FiX className="ml-2" /> : null}
          </KuiButton>
        </div>

        {/* Filter */}
        <div className={`lg:block ${showFilters ? "block" : "hidden"}`}>
          <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-4 lg:space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-base lg:text-lg">フィルター</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                クリア
              </button>
            </div>

            {hasLayoutFilter && (
              <div>
                <h4 className="font-medium mb-2 lg:mb-3 text-sm lg:text-base">
                  レイアウト
                </h4>
                <div className="space-y-1 lg:space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="layout"
                      value="all"
                      checked={selectedLayout === "all"}
                      onChange={(e) => setSelectedLayout(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-xs lg:text-sm">すべて</span>
                  </label>
                  {availableLayouts.map((layout) => (
                    <label key={layout} className="flex items-center">
                      <input
                        type="radio"
                        name="layout"
                        value={layout}
                        checked={selectedLayout === layout}
                        onChange={(e) => setSelectedLayout(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-xs lg:text-sm">{layout}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {hasSwitchFilter && (
              <div>
                <h4 className="font-medium mb-2 lg:mb-3 text-sm lg:text-base">
                  スイッチ
                </h4>
                <div className="space-y-1 lg:space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="switch"
                      value="all"
                      checked={selectedSwitch === "all"}
                      onChange={(e) => setSelectedSwitch(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-xs lg:text-sm">すべて</span>
                  </label>
                  {availableSwitches.map((switchType) => (
                    <label key={switchType} className="flex items-center">
                      <input
                        type="radio"
                        name="switch"
                        value={switchType}
                        checked={selectedSwitch === switchType}
                        onChange={(e) => setSelectedSwitch(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-xs lg:text-sm capitalize">
                        {switchType}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {hasPriceFilter && (
              <div>
                <h4 className="font-medium mb-2 lg:mb-3 text-sm lg:text-base">
                  価格範囲
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs lg:text-sm text-gray-600">
                    <span>¥{priceRange[0].toLocaleString()}</span>
                    <span>¥{priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                </div>
              </div>
            )}

            <div className="pt-3 lg:pt-4 border-t border-gray-200">
              <p className="text-xs lg:text-sm text-gray-600">
                {filteredProducts.length}件の商品が見つかりました
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex-1 min-w-0">
        {/* Custom PR */}
        {children && <div className="mb-4 lg:mb-6">{children}</div>}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
