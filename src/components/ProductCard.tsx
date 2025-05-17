import { Link } from "react-router";
import type { Product } from "../types/Product";
import PriceTag from "./PriceTag";

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="block rounded-lg p-4 bg-kui-base"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto rounded"
      />
      <h2 className="text-base font-semibold mt-2 leading-6">{product.name}</h2>

      <div className="mt-1">
        <PriceTag amount={product.price} />
      </div>
    </Link>
  );
}

export default ProductCard;
