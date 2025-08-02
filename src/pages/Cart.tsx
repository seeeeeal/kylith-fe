import { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { CartContext } from "../context/CartContext";
import type { CartItem } from "../types/CartItem";
import Item from "../components/cart/Item";
import { KuiButton, KuiCheckbox, KuiSteps } from "@/components/kui";
import PriceTag from "@/components/PriceTag";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    toggleItemChecked,
    toggleAllItems,
    getCheckedItems,
  } = useContext(CartContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Calculate totals for checked items only
  const checkedItems = useMemo(() => getCheckedItems(), [cartItems]);

  const total = checkedItems.reduce(
    (sum: number, item: CartItem) => sum + item.product.price * item.quantity,
    0
  );

  const quantity = checkedItems.reduce(
    (sum: number, item: CartItem) => sum + item.quantity,
    0
  );

  // Check if all items are selected
  const allChecked =
    cartItems.length > 0 && cartItems.every((item) => item.checked);

  // Check if some items are selected
  const someChecked = cartItems.some((item) => item.checked);

  const removeAllItems = () => {
    cartItems.forEach((item: CartItem) => {
      removeFromCart(item.id);
    });
  };

  const handleSelectAll = () => {
    toggleAllItems(!allChecked);
  };

  const handleCheckout = () => {
    if (checkedItems.length > 0) {
      navigate("/checkout");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-4">
          {t("cart.title")}
        </h2>

        <div className="flex flex-col items-center justify-center pt-[10vh]">
          <FiShoppingCart className="text-4xl mb-6" />
          <p className="text-base mb-4">カートに商品は入っていません</p>
          <KuiButton
            variant="filled"
            shape="round"
            onClick={() => navigate("/")}
          >
            {t("cart.continueShopping")}
          </KuiButton>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
      <KuiSteps
        steps={["カート", "チェックアウト", "注文完了"]}
        currentStep={0}
      />
      <div className="flex flex-col lg:flex-row justify-between mt-4 sm:mt-6 lg:mt-8 space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:basis-2/3">
          <h2 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-4">
            {t("cart.title")}
          </h2>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-2">
              <KuiCheckbox checked={allChecked} onChange={handleSelectAll}>
                <span className="text-xs">{t("cart.selectAll")}</span>
              </KuiCheckbox>
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
              <li
                key={item.product.id}
                className="border-b border-kui-border relative flex gap-1"
              >
                <KuiCheckbox
                  checked={item.checked || false}
                  onChange={() => toggleItemChecked(item.id)}
                />
                <Item className="flex-1" item={item} />
              </li>
            ))}
          </ul>
          <div className="text-xs text-kui-secondary mt-2">
            {quantity} {t("cart.itemsInCart")}
          </div>
        </div>

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
            disabled={!someChecked}
            onClick={handleCheckout}
          >
            {t("cart.proceedToCheckout")}
          </KuiButton>
        </div>
      </div>
    </div>
  );
};

export default Cart;
