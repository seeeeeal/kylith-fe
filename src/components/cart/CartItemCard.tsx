import { useContext, useCallback } from "react";
import { CartItem } from "../../types/CartItem";
import { FiTrash2, FiHeart } from "react-icons/fi";
import { KuiIconButton, KuiInputNumber } from "@/components/kui";
import PriceTag from "../PriceTag";
import { CartContext } from "@/context/CartContext";

type CartItemCardProps = {
  item: CartItem;
  className?: string;
};

export default function CartItemCard({ item, className }: CartItemCardProps) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = useCallback(
    (value: number) => {
      updateQuantity(item.product.id, value);
    },
    [updateQuantity, item.product.id]
  );

  const handleRemove = useCallback(() => {
    removeFromCart(item.product.id);
  }, [removeFromCart, item.product.id]);

  return (
    <div className={`flex space-x-4 p-4 ${className || ""}`}>
      <img
        src={item.product.image}
        alt={item.product.name}
        className="h-24 w-24 rounded-md object-cover"
        onError={(e) => {
          e.currentTarget.src = "/fallback-image.jpg";
        }}
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.product.name}</h3>
        <dl className="mt-2 text-xs text-kylith/50 leading-5">
          <div>
            <dt className="inline">スイッチ: </dt>
            <dd className="inline text-kui-secondary">
              {item.switch || "Kylith Linear"}
            </dd>
          </div>
          <div>
            <dt className="inline">カラー: </dt>
            <dd className="inline text-kui-secondary">{item.color || "黒"}</dd>
          </div>
          <div>
            <dt className="inline">配列: </dt>
            <dd className="inline text-kui-secondary">
              {item.layout || "英語配列"}
            </dd>
          </div>
        </dl>
        <div className="flex items-center justify-between mt-2">
          <PriceTag amount={item.product.price} />
          <div className="flex items-center space-x-4">
            <KuiInputNumber
              value={item.quantity}
              min={1}
              max={99}
              onChange={handleQuantityChange}
            />
            <KuiIconButton
              variant="text"
              onClick={handleRemove}
              aria-label="カートから削除"
            >
              <FiTrash2 />
            </KuiIconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
