import React from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div className="transition duration-300 transform hover:shadow-xl hover:-translate-y-1">
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
