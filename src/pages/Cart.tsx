import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">カート</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="mb-2 border-b pb-2">
            {item.name} - ¥{item.price.toLocaleString()}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold">合計: ¥{total.toLocaleString()}</p>
    </div>
  );
};

export default Cart;
