import { CartContext } from "@/context/CartContext";
import { useContext, useEffect, useState } from "react";
import { KuiButton, KuiIconButton } from "../kui";
import { FiX } from "react-icons/fi";
import PriceTag from "../PriceTag";
import clsx from "clsx";
import { Link } from "react-router";

export default function CartPopup() {
  const { recentlyAddedItem } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Listen to `recentlyAddedItem` changes,
  // and set `isVisible` to true if `recentlyAddedItem` is defined
  useEffect(() => {
    setIsVisible(recentlyAddedItem !== undefined);
  }, [recentlyAddedItem]);

  // Automatically close the popup after 3 seconds
  // (if new `recentlyAddedItem` is defined or mouse is hovered, reset the timer)
  useEffect(() => {
    if (isVisible && recentlyAddedItem !== undefined && !isHovered) {
      const timer = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(timer);
    }
    return;
  }, [isVisible, recentlyAddedItem, isHovered]);

  return recentlyAddedItem !== undefined ? (
    <div
      className={clsx(
        "absolute top-full right-0 mt-1 bg-white z-50 border border-gray-200 shadow-lg rounded-lg p-4 w-72 transition-all duration-200 ease-in-out",
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <KuiIconButton
        aria-label="Close"
        size="small"
        variant="text"
        className="absolute top-3 right-3"
        onClick={() => setIsVisible(false)}
      >
        <FiX />
      </KuiIconButton>

      <h2 className="text-xs font-semibold mb-2">
        {recentlyAddedItem.quantity} 個の商品がカートに追加されました
      </h2>

      <div className="flex items-center gap-2 bg-kui-base rounded-md p-2 mb-2">
        <img
          src={recentlyAddedItem.product.image}
          alt={recentlyAddedItem.product.name}
          className="w-12 h-12 rounded-md"
        />
        <div className="flex flex-col gap-1">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-xs truncate">
              {recentlyAddedItem.product.name}
            </h3>
            <div className="flex items-baseline gap-1 mt-1">
              <PriceTag
                amount={recentlyAddedItem.product.price}
                size="xsmall"
                emphasis={false}
              />
              <span className="text-xxs text-kui-secondary">
                ×{recentlyAddedItem.quantity}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Link to="/cart" onClick={() => setIsVisible(false)}>
        <KuiButton shape="round" size="medium" className="w-full">
          <span className="text-xs">カートを確認</span>
        </KuiButton>
      </Link>
    </div>
  ) : null;
}
