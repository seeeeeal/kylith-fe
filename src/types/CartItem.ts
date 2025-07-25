import type { Product } from "./Product";

export interface CartItem {
  product: Product;
  quantity: number;
  switch?: string;
  color?: string;
  layout?: string;
}
