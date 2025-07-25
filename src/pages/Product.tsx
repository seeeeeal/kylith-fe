import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router";
import type { Product as ProductType } from "../types/Product";
import { CartContext } from "../context/CartContext";
import { KuiBreadcrumbs } from "../components/kui";
import Selector from "../components/Selector";
import { FiChevronRight, FiHeart } from "react-icons/fi";
import {
  KuiIconButton,
  KuiButton,
  KuiInputNumber,
  KuiToast,
} from "@/components/kui";
// mock data.
import products from "../assets/products";
import switches from "../assets/switches";
import PriceTag from "@/components/PriceTag";

function Product() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { addToCart } = useContext(CartContext);
  const product: ProductType | undefined = products.find((p) => p.id === id);

  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

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
          { label: t("common.backToProducts"), path: "/" },
          { label: t("nav.keyboard"), path: "/products" },
          { label: product.name },
        ]}
      />

      <div className="mt-4 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold">{product.name}</h2>

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
        {/* 商品画像 */}
        <div className="w-full lg:basis-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* 商品詳細 */}
        <div className="flex flex-col space-y-4 w-full lg:basis-1/2">
          <PriceTag amount={product.price} size="large" />

          <hr className="border-kui-border" />

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
          <div>
            <Selector
              title={t("product.color")}
              selected={t("product.black")}
              onSelect={(v) => console.log(v)}
              items={[
                {
                  value: t("product.black"),
                  label: t("product.black"),
                  image: "/original-b13d8875c0376830796c926f87a903b8.webp",
                },
                {
                  value: t("product.white"),
                  label: t("product.white"),
                  image: "/original-cc17bd86f94ae621760cb3b422667b3a.webp",
                },
              ]}
            />
          </div>
          <hr className="border-gray-200" />
          <div>
            <Selector
              title={t("product.layout")}
              selected={t("product.englishLayout")}
              onSelect={(v) => console.log(v)}
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
          </div>

          <div>
            <div className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
              {t("stock.inStock")}
            </div>

            <div className="flex gap-4 items-center w-full">
              <KuiInputNumber
                value={quantity}
                onChange={setQuantity}
                min={1}
                max={99}
                className="h-12"
              />

              <KuiButton
                variant="solid"
                color="default"
                size="large"
                shape="round"
                onClick={() => {
                  addToCart(product, quantity);
                  setShowToast(true);
                }}
                className="flex-1"
              >
                {t("cart.addToCart")}
              </KuiButton>
            </div>

            {showToast && (
              <KuiToast
                message={t("cart.addedToCart")}
                type="success"
                position="top-center"
                onClose={() => setShowToast(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
