import React, { useState, useMemo, useEffect } from "react";
import {
  KuiButton,
  KuiCheckbox,
  KuiIconButton,
  KuiTooltip,
} from "@/components/kui";
import { FiFilter, FiRotateCcw, FiX } from "react-icons/fi";
import type { Product } from "@/types/Product";
import { series } from "@/assets/series";
import clsx from "clsx";

type FilterProps = {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
  className?: string;
};

// common filter section component
const FilterSection = ({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) => (
  <div>
    <h4 className="text-xs font-medium mb-2">{title}</h4>
    <div className="space-y-1">
      {options.map((option) => (
        <KuiCheckbox
          key={option}
          checked={selected.includes(option)}
          onChange={() => onToggle(option)}
        >
          <span className="text-xs">{option}</span>
        </KuiCheckbox>
      ))}
    </div>
  </div>
);

function Filter({ products, onFilterChange, className }: FilterProps) {
  const [selectedSwitches, setSelectedSwitches] = useState<string[]>([]);
  const [selectedSeries, setSelectedSeries] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [showFilters, setShowFilters] = useState(false);

  // common toggle function
  const createToggleHandler = (
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    return (value: string) => {
      setter((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    };
  };

  const switches = [...new Set(products.flatMap((p) => p.switches || []))];

  // filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedSwitches.length > 0 && product.switches) {
        if (!selectedSwitches.some((s) => product.switches!.includes(s)))
          return false;
      }
      if (selectedSeries.length > 0 && product.series) {
        if (!selectedSeries.includes(product.series)) return false;
      }
      if (product.price < priceRange[0] || product.price > priceRange[1])
        return false;
      return true;
    });
  }, [products, selectedSwitches, selectedSeries, priceRange]);

  const clearFilters = () => {
    setSelectedSwitches([]);
    setSelectedSeries([]);
    setPriceRange([0, 20000]);
  };

  useEffect(() => {
    onFilterChange(filteredProducts);
  }, [filteredProducts, onFilterChange]);

  return (
    <div className={`w-full lg:w-64 lg:flex-shrink-0 ${className || ""}`}>
      {/* mobile filter button */}
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

      {/* filter */}
      <div
        className={`lg:block ${
          showFilters ? "block" : "hidden"
        } border border-kui-border p-4 rounded-lg sticky top-[100px]`}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm">フィルター</h3>
            <KuiTooltip
              title="フィルターをクリア"
              position="bottom"
              variant="dark"
              size="xsmall"
            >
              <KuiIconButton
                aria-label="フィルターをクリア"
                variant="text"
                size="small"
                onClick={clearFilters}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                <FiRotateCcw />
              </KuiIconButton>
            </KuiTooltip>
          </div>

          <FilterSection
            title="スイッチ"
            options={switches}
            selected={selectedSwitches}
            onToggle={createToggleHandler(setSelectedSwitches)}
          />

          <FilterSection
            title="シリーズ"
            options={series.map((s) => s.name)}
            selected={selectedSeries}
            onToggle={createToggleHandler(setSelectedSeries)}
          />

          {/* price filter */}
          <div>
            <h4 className="text-xs font-medium mb-2">価格範囲</h4>
            <div>
              <div className="flex items-center justify-between text-xs text-kui-secondary">
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
                className={clsx(
                  "w-full h-1 bg-kui-border rounded-lg appearance-none cursor-pointer",
                  "[&::-webkit-slider-thumb]:bg-kui-default [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none",
                  "[&::-moz-range-thumb]:bg-kui-default [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:appearance-none"
                )}
              />
            </div>
          </div>

          <p className="text-xs text-gray-600">
            {filteredProducts.length}件の商品が見つかりました
          </p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
