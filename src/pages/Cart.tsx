import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import type { CartItem } from "../types/CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  const total = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">カート</h1>
      <ul>
        {cartItems.map((item: CartItem) => (
          <li key={item.product.id} className="mb-2 border-b pb-2">
            {item.product.name} - ¥{item.product.price.toLocaleString()} *{" "}
            {item.quantity}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold">合計: ¥{total.toLocaleString()}</p>
    </div>
  );
};

export default Cart;
