import { useContext } from "react";
import { CartItem } from "../../types/CartItem";
import { FiTrash2, FiHeart } from "react-icons/fi";
import { KuiIconButton, KuiInputNumber } from "@/components/kui";
import PriceTag from "../PriceTag";
import { CartContext } from "@/context/CartContext";

export default function CartItemCart({ item }: { item: CartItem }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

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
            <KuiInputNumber
              value={item.quantity}
              min={1}
              max={99}
              onChange={(value) => updateQuantity(item.product.id, value)}
            />
            <KuiIconButton
              variant="text"
              onClick={() => removeFromCart(item.product.id)}
            >
              <FiTrash2 />
            </KuiIconButton>
            {/* <KuiIconButton aria-label="お気に入りに追加" variant="text">
              <FiHeart />
            </KuiIconButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}
