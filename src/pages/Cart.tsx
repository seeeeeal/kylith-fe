import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { CartContext } from "../context/CartContext";
import type { CartItem } from "../types/CartItem";
import CartItemCard from "../components/cart/CartItemCard";
import { KuiButton } from "@/components/kui";
import PriceTag from "@/components/PriceTag";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const total = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.product.price * item.quantity,
    0
  );

  const quantity = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.quantity,
    0
  );

  const removeAllItems = () => {
    cartItems.forEach((item: CartItem) => {
      removeFromCart(item.product.id);
    });
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between mt-4 sm:mt-6 lg:mt-8 space-y-6 lg:space-y-0 lg:space-x-8">
        {/* カートアイテムセクション */}
        <div className="w-full lg:basis-2/3">
          <h2 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-4">
            {t("cart.title")}
          </h2>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="select-all"
                className="h-3 w-3 text-kui-default border-kui-border rounded focus:ring-kui-default"
              />
              <label htmlFor="select-all" className="text-xs">
                {t("cart.selectAll")}
              </label>
            </div>
            <KuiButton
              variant="text"
              size="small"
              shape="round"
              onClick={() => removeAllItems()}
            >
              <FiTrash2 className="mr-1" />
              <span className="hidden sm:inline">{t("cart.removeAll")}</span>
              <span className="sm:hidden">{t("cart.removeAll")}</span>
            </KuiButton>
          </div>

          <ul className="mt-4">
            {cartItems.map((item: CartItem) => (
              <li key={item.product.id} className="border-b border-kui-border">
                <CartItemCard item={item} />
              </li>
            ))}
          </ul>
          <div className="text-xs text-kui-secondary mt-2">
            {quantity} {t("cart.itemsInCart")}
          </div>
        </div>

        {/* サマリーセクション */}
        <div className="w-full lg:flex-1 lg:max-w-sm">
          <div className="bg-kui-base p-4 rounded-lg sticky top-20">
            <div className="flex items-center justify-between">
              <dt className="text-sm sm:text-base">{t("cart.subtotal")}</dt>
              <dd>
                <PriceTag amount={total} taxIncluded={false} />
              </dd>
            </div>
            <p className="text-kui-secondary text-xs mt-2">
              {t("cart.taxNote")}
            </p>
          </div>

          <KuiButton
            className="w-full mt-4"
            size="large"
            shape="round"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            {t("cart.proceedToCheckout")}
          </KuiButton>
        </div>
      </div>
    </div>
  );
};

export default Cart;
