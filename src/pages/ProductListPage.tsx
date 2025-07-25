import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../types/Product";
import ProductList from "../components/ProductList";
import { KuiBreadcrumbs } from "../components/kui";
function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/products")
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.error("APIエラー:", err));
  // }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-8 py-6 ">
      <div>
        <KuiBreadcrumbs
          items={[
            { label: "ホーム", path: "/" },
            { label: "商品一覧", path: "/products" },
          ]}
        />

        <div className="mt-4">
          <ProductList />
        </div>
        {/* <ProductList products={products} /> */}
      </div>
    </div>
  );
}
export default ProductListPage;
