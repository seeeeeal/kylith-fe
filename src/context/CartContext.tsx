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
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  toggleItemChecked: (itemId: string) => void;
  toggleAllItems: (checked: boolean) => void;
  getCheckedItems: () => CartItem[];
  recentlyAddedItem:
    | {
        product: Product;
        quantity: number;
        options?: { switch?: string; color?: string; layout?: string };
      }
    | undefined;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  toggleItemChecked: () => {},
  toggleAllItems: () => {},
  getCheckedItems: () => [],
  recentlyAddedItem: undefined,
} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [recentlyAddedItem, setRecentlyAddedItem] = useState<
    CartItem | undefined
  >(undefined);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Migrate existing cart items to include unique IDs
        const migratedCart = parsedCart.map((item: any) => {
          if (!item.id) {
            // Generate unique ID for existing items
            const uniqueId = `${item.product.id}-${item.switch || "default"}-${
              item.color || "default"
            }-${item.layout || "default"}`;
            return {
              ...item,
              id: uniqueId,
              checked: item.checked !== undefined ? item.checked : true,
            };
          }
          return item;
        });
        setCartItems(migratedCart);
      } catch (error) {
        console.error("Failed to load cart:", error);
        setCartItems([]);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save cart to LocalStorage
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

  const addToCart = (
    product: Product,
    quantity: number,
    options?: { switch?: string; color?: string; layout?: string }
  ) => {
    // Generate unique ID for the cart item
    const uniqueId = `${product.id}-${options?.switch || "default"}-${
      options?.color || "default"
    }-${options?.layout || "default"}`;

    // Set the recently added item to trigger the popup
    const recentlyAddedItem = {
      id: uniqueId,
      product,
      quantity,
      checked: true,
      ...(options?.switch && { switch: options.switch }),
      ...(options?.color && { color: options.color }),
      ...(options?.layout && { layout: options.layout }),
    };
    setRecentlyAddedItem(recentlyAddedItem);

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
        // Generate unique ID for the cart item
        const uniqueId = `${product.id}-${options?.switch || "default"}-${
          options?.color || "default"
        }-${options?.layout || "default"}`;

        return [
          ...prevItems,
          {
            id: uniqueId,
            product,
            quantity,
            checked: true, // Default to checked for new items
            ...(options?.switch && { switch: options.switch }),
            ...(options?.color && { color: options.color }),
            ...(options?.layout && { layout: options.layout }),
          },
        ];
      }
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const toggleItemChecked = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const toggleAllItems = (checked: boolean) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => ({ ...item, checked }))
    );
  };

  const getCheckedItems = () => {
    return cartItems.filter((item) => item.checked);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toggleItemChecked,
        toggleAllItems,
        getCheckedItems,
        recentlyAddedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
