import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import ProductList from "../components/product/List";
import { KuiBreadcrumbs, KuiButton } from "../components/kui";
import products from "../assets/products";
import { useTranslation } from "react-i18next";
// import axios from "axios";

function KeyboardsPage() {
  const { t } = useTranslation();
  const [productsData, setProductsData] = useState<Product[]>([]);

  useEffect(() => {
    // axios
    //   .get("http://localhost:3001/api/products")
    //   .then((res) => setProductsData(res.data))
    //   .catch((err) => console.error("APIエラー:", err));
    setProductsData(products);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-8 py-6 ">
      <div>
        <KuiBreadcrumbs
          items={[
            { label: t("nav.home"), path: "/" },
            { label: t("nav.keyboards"), path: "/keyboards" },
          ]}
        />

        <div className="mt-4">
          <ProductList products={productsData}>
            {/* Custom PR */}
            <div
              className={`relative flex items-center w-full bg-[url(/HE.jpg)] bg-center bg-cover p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black opacity-40 z-0" />
              <div className="relative z-10 text-white p-2 sm:p-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold leading-tight sm:leading-10">
                  静かに、速く。
                  <br />
                  Kylith HE Series & Kylith Mag Switch
                </h2>
                <p className="mt-2 sm:mt-4 text-xs sm:text-sm leading-5 sm:leading-6">
                  Kylith HE Series、Mag Switchとともに登場。
                  <br />
                  次世代の非接触スイッチが、あなたの指先に革命を。
                </p>
                <KuiButton
                  className="mt-3 sm:mt-4 h-6 sm:h-8 text-xs"
                  variant="solid"
                  color="default"
                  shape="round"
                  size="small"
                >
                  詳細を見る
                </KuiButton>
              </div>
            </div>
          </ProductList>
        </div>
      </div>
    </div>
  );
}
export default KeyboardsPage;
