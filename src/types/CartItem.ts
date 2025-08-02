import type { Product } from "./Product";

export interface CartItem {
  id: string; // Unique identifier for the cart item
  product: Product;
  quantity: number;
  switch?: string;
  color?: string;
  layout?: string;
  checked?: boolean;
}
