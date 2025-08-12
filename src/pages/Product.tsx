import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router";
import { CartContext } from "../context/CartContext";
import { KuiBreadcrumbs, KuiTag } from "../components/kui";
import Selector from "../components/Selector";
import { FiChevronRight, FiHeart, FiTruck } from "react-icons/fi";
import { KuiIconButton, KuiButton, KuiInputNumber } from "@/components/kui";
// mock data.
import products from "../assets/products";
import switches from "../assets/switches";
import PriceTag from "@/components/PriceTag";
import type { Product } from "../types/Product";
import ImageGallery from "../components/product/ImageGallery";

function Product() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === id);

  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const filteredSwitches = switches.filter((sw) => {
    if (product?.switches) {
      return product.switches.includes(sw.type);
    }
    return [];
  });

  // Use the first switch as the default selected switch
  const [selectedSwitch, setSelectedSwitch] = useState(
    filteredSwitches[0]?.type
  );

  // Add state for color and layout selection
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].name);
  const [selectedLayout, setSelectedLayout] = useState(
    t("product.englishLayout")
  );
  const currentColorImage = product?.colors.find(
    (color) => color.name === selectedColor
  )?.image;

  if (!product) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">{t("common.notFound")}</h2>
        <Link to="/products" className="text-blue-500 underline">
          {t("common.backToProducts")}
        </Link>
      </div>
    );
  }
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <KuiBreadcrumbs
        items={[
          { label: t("nav.home"), path: "/" },
          { label: t("nav.keyboards"), path: "/keyboards" },
          { label: product.fullName },
        ]}
      />

      <div className="mt-4 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold">{product.fullName}</h2>

        <KuiIconButton
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="お気に入りに追加"
          variant="filled"
          color={isFavorite ? "error" : "default"}
        >
          {isFavorite ? <FiHeart fill="currentColor" /> : <FiHeart />}
        </KuiIconButton>
      </div>

      <div className="mt-4 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:basis-1/2 max-w-full lg:max-w-1/2">
          <ImageGallery
            images={product.images}
            productName={product.name}
            currentImage={currentColorImage ?? ""}
          />
        </div>

        <div className="flex flex-col space-y-4 w-full lg:basis-1/2">
          <PriceTag amount={product.price} size="large" />
          <hr className="border-kui-border" />

          {/* Switch selector */}
          <div>
            <Selector
              title={t("product.switch")}
              selected={selectedSwitch}
              onSelect={(v) => setSelectedSwitch(v)}
              items={filteredSwitches.map((sw) => ({
                value: sw.type,
                label: sw.name,
                image: `/${sw.image}`,
                desc: sw.desc,
                tags: sw.tags,
              }))}
            />

            <button className="mt-2 text-xs text-kui-primary flex items-center">
              <span>{t("product.switchSupport")}</span>
              <FiChevronRight />
            </button>
          </div>

          <hr className="border-kui-border" />

          {/* Color selector */}
          <Selector
            title={t("product.color")}
            selected={selectedColor}
            onSelect={(v) => setSelectedColor(v)}
            items={product.colors.map((color) => ({
              value: color.name,
              label: color.name,
              image: color.image,
            }))}
          />

          <hr className="border-gray-200" />

          {/* Layout selector */}
          <Selector
            title={t("product.layout")}
            selected={selectedLayout}
            onSelect={(v) => setSelectedLayout(v)}
            items={[
              {
                value: t("product.englishLayout"),
                label: t("product.englishLayout"),
              },
              {
                value: t("product.japaneseLayout"),
                label: t("product.japaneseLayout"),
              },
            ]}
          />

          <div>
            <div className="mb-4">
              {product.stock > 0 ? (
                <KuiTag
                  color="success"
                  size="small"
                  variant="soft"
                  className="rounded-full!"
                >
                  <span className="w-2 h-2 bg-kui-success rounded-full"></span>
                  {t("stock.inStock")}
                </KuiTag>
              ) : (
                <KuiTag
                  color="error"
                  size="small"
                  variant="soft"
                  className="rounded-full!"
                >
                  <span className="w-2 h-2 bg-kui-error rounded-full"></span>
                  {t("stock.outOfStock")}
                </KuiTag>
              )}
            </div>

            <div className="flex gap-4 items-center w-full">
              <KuiInputNumber
                value={quantity}
                onChange={setQuantity}
                min={1}
                max={99}
                className="h-12"
                disabled={product.stock === 0}
              />

              <KuiButton
                variant="solid"
                color="default"
                size="large"
                shape="round"
                disabled={product.stock === 0}
                onClick={() => {
                  addToCart(product as Product, quantity, {
                    switch: selectedSwitch,
                    color: selectedColor,
                    layout: selectedLayout,
                  });
                }}
                className="flex-1"
              >
                {t("cart.addToCart")}
              </KuiButton>
            </div>
          </div>

          <hr className="border-kui-border" />

          <div className="flex flex-col gap-2">
            <p className="text-xs leading-relaxed text-kui-secondary">
              {product.description}
            </p>

            <div className="bg-kui-base text-kui-secondary rounded-lg p-4 flex items-center gap-2">
              <FiTruck className="w-4 h-4" />
              <span className="text-xs">日本全国送料無料です。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
