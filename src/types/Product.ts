export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  layout?: string;
  image?: string;
  switches?: string[];
}
