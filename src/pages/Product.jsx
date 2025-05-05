import { useState, useContext } from "react";
import { useParams, Link } from "react-router";
import products from "../assets/products";
import { CartContext } from "../context/CartContext";
import Toast from "../components/Toast";

function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setShowToast(true);
  }

  if (!product) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">商品が見つかりません</h2>
        <Link to="/products" className="text-blue-500 underline">
          商品一覧に戻る
        </Link>
      </div>
    );
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full h-auto" />
      <p className="mt-4">Layout: {product.layout}</p>
      <p className="mt-2">Price: ¥{product.price.toLocaleString()}</p>

      <button onClick={handleAddToCart}>カートに追加</button>

      <Link
        to="/products"
        className="mt-4 inline-block text-blue-500 underline"
      >
        商品一覧に戻る
      </Link>

      {showToast && (
        <Toast
          message="カートに追加しました！"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default Product;
