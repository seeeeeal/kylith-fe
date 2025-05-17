import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import type { CartItem } from "../types/CartItem";
import CartItemCart from "../components/cart/CartItemCart";
import { KuiButton, KuiSteps } from "@/components/kui";
import PriceTag from "@/components/PriceTag";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItems = [
    {
      product: {
        id: "kylith-75",
        name: "Kylith 75 ワイヤレス メカニカルキーボード",
        layout: "75%",
        switches: ["linear", "pulse", "zero", "spark", "cloud"],
        price: 18800,
        image: "/original-b13d8875c0376830796c926f87a903b8.webp",
      },
      quantity: 3,
    },
    {
      product: {
        id: "kylith-75-HE",
        name: "Kylith 75 HE 磁気スイッチ ワイヤレス メカニカルキーボード",
        layout: "75%",
        switches: ["mag"],
        connection: "2.4GHz Wireless / Bluetooth 5.1 / USB-C",
        battery: "5000mAh",
        price: 18800,
        image: "/original-b13d8875c0376830796c926f87a903b8.webp",
      },
      quantity: 3,
    },
  ];

  const total = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.product.price * item.quantity,
    0
  );

  const quantity = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.quantity,
    0
  );

  return (
    <div className="w-full max-w-screen-xl mx-auto p-8">
      <KuiSteps steps={["カート", "お届け先", "お支払い"]} currentStep={0} />

      <div className="flex justify-between mt-8 space-x-8">
        <div className="basis-2/3">
          <h2 className="text-2xl font-semibold mt-4">カート</h2>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="select-all"
                className="h-3 w-3 text-kui-default border-kui-border rounded focus:ring-kui-default"
              />
              <label htmlFor="select-all" className="text-xs">
                全て選択
              </label>
            </div>
            <KuiButton variant="text" size="small" shape="round">
              <FiTrash2 className="mr-1" />
              全て削除
            </KuiButton>
          </div>

          <ul>
            {cartItems.map((item: CartItem) => (
              <li key={item.product.id} className="border-b border-kui-border">
                <CartItemCart item={item} />
              </li>
            ))}
          </ul>
          <div className="text-xs text-kui-secondary mt-2">
            {quantity} 個の商品がカートに入っています
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-kui-default/5 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <dt>小計:</dt>
              <dd>
                <PriceTag amount={total} taxIncluded={false} />
              </dd>
            </div>
            <p className="text-kui-secondary text-xs mt-2">
              * 価格には消費税が含まれています
            </p>
          </div>

          <KuiButton className="w-full mt-4" size="large" shape="round">
            お届け先へ進む
          </KuiButton>
        </div>
      </div>
    </div>
  );
};

export default Cart;
