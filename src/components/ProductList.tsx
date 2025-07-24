import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";
import products from "../assets/products";
import { KuiButton } from "./kui";
import { FiFilter, FiX } from "react-icons/fi";

function ProductList() {
  const [selectedLayout, setSelectedLayout] = useState<string>("all");
  const [selectedSwitch, setSelectedSwitch] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [showFilters, setShowFilters] = useState(false);

  // フィルター適用後の商品リスト
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // レイアウトフィルター
      if (selectedLayout !== "all" && product.layout !== selectedLayout) {
        return false;
      }

      // スイッチフィルター
      if (
        selectedSwitch !== "all" &&
        !product.switches.includes(selectedSwitch)
      ) {
        return false;
      }

      // 価格フィルター
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      return true;
    });
  }, [selectedLayout, selectedSwitch, priceRange]);

  // 利用可能なレイアウトとスイッチを取得
  const availableLayouts = useMemo(() => {
    const layouts = [...new Set(products.map((p) => p.layout))];
    return layouts;
  }, []);

  const availableSwitches = useMemo(() => {
    const switches = [...new Set(products.flatMap((p) => p.switches))];
    return switches;
  }, []);

  const clearFilters = () => {
    setSelectedLayout("all");
    setSelectedSwitch("all");
    setPriceRange([0, 20000]);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
      {/* フィルターセクション */}
      <div className="w-full lg:w-64 lg:flex-shrink-0">
        {/* モバイル用フィルターボタン */}
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

        {/* フィルターコンテンツ */}
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

            {/* レイアウトフィルター */}
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

            {/* スイッチフィルター */}
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

            {/* 価格フィルター */}
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

            {/* 結果表示 */}
            <div className="pt-3 lg:pt-4 border-t border-gray-200">
              <p className="text-xs lg:text-sm text-gray-600">
                {filteredProducts.length}件の商品が見つかりました
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 商品一覧セクション */}
      <div className="flex-1 min-w-0">
        {/* ヒーローセクション - レスポンシブ対応 */}
        <div className="relative flex items-center w-full bg-[url(/HE.jpg)] bg-center bg-cover p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden mb-4 lg:mb-6">
          <div className="absolute inset-0 bg-black opacity-40 z-0" />
          <div className="relative z-10 text-white p-2 sm:p-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold leading-tight sm:leading-10">
              静かに、速く。
              <br />
              Kylith HE Series & Kylith Mag Switch
            </h2>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm leading-5 sm:leading-6">
              Kylith HE Series、Mag Switchとともに登場。
              <br className="hidden sm:block" />
              次世代の非接触スイッチが、あなたの指先に革命を。
            </p>
            <KuiButton
              className="mt-3 sm:mt-4 h-6 sm:h-8 text-xs"
              variant="solid"
              color="default"
              shape="round"
              size="small"
            >
              詳細を見る
            </KuiButton>
          </div>
        </div>

        {/* 商品グリッド - レスポンシブ対応 */}
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
