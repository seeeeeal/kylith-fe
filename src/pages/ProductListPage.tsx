import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../types/Product";
import ProductList from "../components/ProductList";

function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("APIエラー:", err));
  }, []);

  return (
    <div>
      <div>Filter</div>
      <ProductList products={products} />
    </div>
  );
}
export default ProductListPage;
