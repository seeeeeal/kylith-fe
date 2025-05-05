import { Link } from "react-router";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="block border rounded-lg p-4 hover:shadow-md transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto rounded"
      />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">Layout: {product.layout}</p>
      <p className="text-gray-600">Price: ¥{product.price.toLocaleString()}</p>
    </Link>
  );
}

export default ProductCard;
