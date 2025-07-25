import { createContext, useState, ReactNode, useEffect } from "react";
import type { CartItem } from "../types/CartItem";
import type { Product } from "../types/Product";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    product: Product,
    quantity: number,
    options?: { switch?: string; color?: string; layout?: string }
  ) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to load cart:", error);
        setCartItems([]);
      }
    }
  }, []);

  // Save cart to LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (
    product: Product,
    quantity: number,
    options?: { switch?: string; color?: string; layout?: string }
  ) => {
    setCartItems((prevItems) => {
      // Check if the same product with the same options already exists
      const existingItem = prevItems.find(
        (item) =>
          item.product.id === product.id &&
          item.switch === options?.switch &&
          item.color === options?.color &&
          item.layout === options?.layout
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id &&
          item.switch === options?.switch &&
          item.color === options?.color &&
          item.layout === options?.layout
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            product,
            quantity,
            ...(options?.switch && { switch: options.switch }),
            ...(options?.color && { color: options.color }),
            ...(options?.layout && { layout: options.layout }),
          },
        ];
      }
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
