import React, { useState } from "react";
import { useParams, Link } from "react-router";
import products from "../assets/products";
import type { Product as ProductType } from "../types/Product";
import AddToCartButton from "../components/AddToCartButton";
import Breadcrumbs from "../components/Breadcrumbs";
import Selector from "../components/Selector";
import { FiChevronRight, FiHeart } from "react-icons/fi";

function Product() {
  const { id } = useParams();
  const product: ProductType | undefined = products.find((p) => p.id === id);

  const [isFavorite, setIsFavorite] = useState(false);

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
    <div className="w-full max-w-screen-xl mx-auto p-8">
      <Breadcrumbs
        items={[
          { label: "ホーム", path: "/" },
          { label: "商品一覧", path: "/products" },
          { label: product.name },
        ]}
      />

      <div className="flex items-center justify-between">
        <h2 className="mt-4 text-2xl font-bold">{product.name}</h2>

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="お気に入りに追加"
          className={`p-2 rounded-full transition duration-200 ${
            isFavorite
              ? "bg-red-100 text-red-500"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {isFavorite ? <FiHeart fill="currentColor" /> : <FiHeart />}
        </button>
      </div>

      <div className="mt-4 flex space-x-8">
        <div className="basis-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col space-y-6 basis-1/2">
          <p className="flex space-x-1 items-center">
            <span>¥</span>
            <span className="text-3xl font-semibold">
              {product.price.toLocaleString()}
            </span>
            <span className="text-xs">税込</span>
          </p>

          <div>
            <Selector
              title="スイッチ"
              selected="linear"
              onSelect={(v) => console.log(v)}
              items={[
                { value: "linear", label: "Kylith Linear", image: "/logo.png" },
                { value: "pulse", label: "Kylith Pulse", image: "/logo.png" },
                { value: "zero", label: "Kylith Zero", image: "/logo.png" },
                { value: "mag", label: "Kylith Mag", image: "/logo.png" },
              ]}
            />
            <button className="mt-4 text-xs text-kylith-accent flex items-center">
              <span>スイッチ選びをサポート</span>
              <FiChevronRight />
            </button>
          </div>

          <hr className="border-gray-200" />

          <div>
            <Selector
              title="カラー"
              selected="黒"
              onSelect={(v) => console.log(v)}
              items={[
                { value: "黒", label: "黒", image: "/logo.png" },
                { value: "白", label: "白", image: "/logo.png" },
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
