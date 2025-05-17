import React, { useState } from "react";
import { useParams, Link } from "react-router";
import type { Product as ProductType } from "../types/Product";
import AddToCartButton from "../components/AddToCartButton";
import Breadcrumbs from "../components/Breadcrumbs";
import Selector from "../components/Selector";
import { FiChevronRight, FiHeart } from "react-icons/fi";
import { KuiIconButton } from "@/components/kui";
// mock data.
import products from "../assets/products";
import switches from "../assets/switches";
import PriceTag from "@/components/PriceTag";

function Product() {
  const { id } = useParams();
  const product: ProductType | undefined = products.find((p) => p.id === id);

  const [isFavorite, setIsFavorite] = useState(false);

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
        <h2 className="text-2xl font-bold">商品が見つかりません</h2>
        <Link to="/products" className="text-blue-500 underline">
          商品一覧に戻る
        </Link>
      </div>
    );
  }
  return (
    <div className="w-full max-w-screen-xl mx-auto px-8 py-6">
      <Breadcrumbs
        items={[
          { label: "ホーム", path: "/" },
          { label: "商品一覧", path: "/products" },
          { label: product.name },
        ]}
      />

      <div className="mt-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{product.name}</h2>

        <KuiIconButton
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="お気に入りに追加"
          variant="filled"
          color={isFavorite ? "danger" : "default"}
        >
          {isFavorite ? <FiHeart fill="currentColor" /> : <FiHeart />}
        </KuiIconButton>
      </div>

      <div className="mt-4 flex space-x-8">
        <div className="basis-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col space-y-4 basis-1/2">
          <PriceTag amount={product.price} size="large" />

          <hr className="border-kui-border" />

          <div>
            <Selector
              title="スイッチ"
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
              <span>スイッチ選びをサポート</span>
              <FiChevronRight />
            </button>
          </div>
          <hr className="border-kui-border" />
          <div>
            <Selector
              title="カラー"
              selected="黒"
              onSelect={(v) => console.log(v)}
              items={[
                {
                  value: "黒",
                  label: "黒",
                  image: "/original-b13d8875c0376830796c926f87a903b8.webp",
                },
                {
                  value: "白",
                  label: "白",
                  image: "/original-cc17bd86f94ae621760cb3b422667b3a.webp",
                },
              ]}
            />
          </div>
          <hr className="border-gray-200" />
          <div>
            <Selector
              title="配列"
              selected="英語配列"
              onSelect={(v) => console.log(v)}
              items={[
                {
                  value: "英語配列",
                  label: "英語配列",
                },
                {
                  value: "日本語配列",
                  label: "日本語配列",
                },
              ]}
            />
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default Product;
