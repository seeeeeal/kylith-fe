import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import type { Product } from "../types/Product";
import Toast from "./Toast";
import { FiMinus, FiPlus } from "react-icons/fi";
import { KuiButton } from "@/components/kui";

function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    addToCart(product, quantity);
    setShowToast(true);
  }

  return (
    <div>
      <div className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full mb-4">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span> 在庫あり
      </div>

      {/* <div className="inline-flex items-center gap-1 text-xs text-gray-500 bg-kui-default/5 px-2 py-0.5 rounded-full">
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span> 在庫なし
      </div> */}

      <div className="flex gap-4 items-center w-full">
        <div className="h-12 flex items-center border rounded-full">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-xl font-bold"
          >
            <FiMinus />
          </button>
          <span className="text-lg w-[4em] text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-xl font-bold"
          >
            <FiPlus />
          </button>
        </div>

        <KuiButton
          variant="solid"
          color="default"
          size="large"
          shape="round"
          onClick={() => handleClick}
          className="flex-1"
        >
          カートに追加
        </KuiButton>
        {showToast && (
          <Toast
            message="カートに追加しました！"
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    </div>
  );
}

export default AddToCartButton;
