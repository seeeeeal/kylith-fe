import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import type { Product } from "../types/Product";
import Toast from "./Toast";

function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    addToCart(product);
    setShowToast(true);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        カートに追加
      </button>
      {showToast && (
        <Toast
          message="カートに追加しました！"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

export default AddToCartButton;
