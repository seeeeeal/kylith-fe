import { KuiButton } from "@/components/kui";
import PriceTag from "@/components/PriceTag";
import { Link } from "react-router";
import products from "@/assets/products";

export default function Products() {
  return (
    <section className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-2xl mb-8">
        <span className="font-semibold">Products</span>
        <span className="ml-2 text-xs text-kui-default/50">おすすめの製品</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="rounded-lg p-4 bg-kui-base">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded mb-2"
            />
            <h2 className="text-sm sm:text-base font-semibold mb-1">
              {product.name}
            </h2>

            <div className="mb-2">
              <PriceTag amount={product.price} size="small" />
            </div>

            <Link to={`/products/${product.id}`}>
              <KuiButton
                variant="solid"
                color="default"
                size="medium"
                shape="round"
                className="w-full"
              >
                今すぐ見る
              </KuiButton>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
