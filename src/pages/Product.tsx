import React from "react";
import { useParams, Link } from "react-router";
import products from "../assets/products";
import type { Product as ProductType } from "../types/Product";
import AddToCartButton from "../components/AddToCartButton";

function Product() {
  const { id } = useParams();
  const product: ProductType | undefined = products.find((p) => p.id === id);

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
    <div className="p-4">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full h-auto" />
      <p className="mt-4">Layout: {product.layout}</p>
      <p className="mt-2">Price: ¥{product.price.toLocaleString()}</p>

      <AddToCartButton product={product} />

      <Link
        to="/products"
        className="mt-4 inline-block text-blue-500 underline"
      >
        商品一覧に戻る
      </Link>
    </div>
  );
}

export default Product;
