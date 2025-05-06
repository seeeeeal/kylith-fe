import React from "react";
import { Link } from "react-router";
import type { Product } from "../types/Product";
import AddToCartButton from "./AddToCartButton";

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="block border border-kylith rounded-lg p-4 hover:shadow-md transition"
    >
      {/* <img
        src={product.image}
        alt={product.name}
        className="w-f”ull h-auto rounded"
      /> */}

      <img
        src="https://images.pexels.com/photos/18311093/pexels-photo-18311093/free-photo-of-3d.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt={product.name}
        className="w-full h-auto rounded"
      />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">Layout: {product.layout}</p>
      <p className="text-gray-600">Price: ¥{product.price.toLocaleString()}</p>

      <AddToCartButton product={product} />
    </Link>
  );
}

export default ProductCard;
