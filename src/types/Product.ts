type Series = "basic" | "he" | "compact";
type Status = "new" | "sale" | "limited";

export interface Product {
  id: string;
  name: string;
  fullName: string;
  description: string;
  price: number;
  image: string;
  category: string;
  switches?: string[];
  colors: { name: string; image: string }[];
  layouts?: string[];
  status?: Status[];
  stock?: number;
  series: Series;
}
