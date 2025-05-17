import React from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";
import products from "../assets/products";
import { KuiButton } from "./kui";

function ProductList() {
  // function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative flex items-center col-span-1 sm:col-span-2 lg:col-span-2 bg-[url(/original-29d59d70185d61f6cfc088bb46e51738.webp)] bg-center bg-cover p-4 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0" />
        <div className="relative z-10 text-white p-4">
          <h2 className="text-3xl text-white font-bold leading-10">
            静かに、速く。
            <br />
            Kylith HE Series & Kylith Mag Switch
          </h2>
          <p className="mt-4 text-sm leading-6">
            Kylith HE Series、Mag Switchとともに登場。
            <br />
            次世代の非接触スイッチが、あなたの指先に革命を。
          </p>
          <KuiButton
            className="mt-4 h-8 text-xs"
            variant="solid"
            color="default"
            shape="round"
            size="medium"
          >
            詳細を見る
          </KuiButton>
        </div>
      </div>
      {products.map((product) => (
        <div key={product.id} className="">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
