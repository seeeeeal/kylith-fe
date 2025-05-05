import React, { createContext, useState, ReactNode } from "react";
import type { CartItem } from "../types/CartItem";
import type { Product } from "../types/Product";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
}
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
