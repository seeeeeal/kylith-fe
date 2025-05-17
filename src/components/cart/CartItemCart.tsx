import { CartItem } from "../../types/CartItem";
import React from "react";
import { FiMinus, FiPlus, FiTrash2, FiHeart } from "react-icons/fi";
import { useContext } from "react";
import { KuiIconButton } from "@/components/kui";
import PriceTag from "../PriceTag";

export default function CartItemCart({ item }: { item: CartItem }) {
  return (
    <div className="flex space-x-4 p-4">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="h-24 w-24 rounded-md object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.product.name}</h3>
        <dl className="mt-2 text-xs text-kylith/50 leading-5">
          <div>
            <dt className="inline">スイッチ: </dt>
            <dd className="inline text-kui-secondary">Kylith Linear</dd>
          </div>
          <div>
            <dt className="inline">カラー: </dt>
            <dd className="inline text-kui-secondary">黒</dd>
          </div>
          <div>
            <dt className="inline">配列: </dt>
            <dd className="inline text-kui-secondary">英語配列</dd>
          </div>
        </dl>
        <div className="flex items-center justify-between mt-2">
          <PriceTag amount={item.product.price} />
          <div className="flex items-center space-x-4">
            <div className="h-8 flex items-center border rounded-full">
              <button
                // onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2 py-2 text-sm font-bold"
              >
                <FiMinus />
              </button>
              <span className="text-sm w-[4em] text-center">
                {item.quantity}
              </span>
              <button
                // onClick={() => setQuantity(quantity + 1)}
                className="px-2 py-2 text-sm font-bold"
              >
                <FiPlus />
              </button>
            </div>
            <KuiIconButton variant="text">
              <FiTrash2 />
            </KuiIconButton>
            <KuiIconButton aria-label="お気に入りに追加" variant="text">
              <FiHeart />
            </KuiIconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
