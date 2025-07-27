import { Link } from "react-router";
import NavigationDropdown from "./NavigationDropdown";
import { KuiTag } from "../kui";
import products from "../../assets/products";
import { series } from "../../assets/series";
import { FiChevronRight } from "react-icons/fi";

interface KeyboardDropdownProps {
  isOpen: boolean;
  onMouseLeave: () => void;
  closeAllDropdowns: () => void;
}

export default function KeyboardDropdown({
  isOpen,
  onMouseLeave,
  closeAllDropdowns,
}: KeyboardDropdownProps) {
  return (
    <NavigationDropdown isOpen={isOpen} onMouseLeave={onMouseLeave}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-xs">
        <div className="col-span-1">
          <h3 className="text-base font-semibold mb-4 text-kui-default">
            新製品
          </h3>
          <div className="bg-gradient-to-r from-kui-primary/20 to-purple-500/10 rounded-lg p-4 relative">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">
                Kylith HE Series、登場。
              </h4>
              <p className="text-xs text-kui-default leading-relaxed">
                Kylith初のMag Switchを搭載した、次世代モデルです。
                <br />
                磁気式アクチュエーションにより、
                <br />
                わずかな力で反応し、驚くほど静かで、なめらか。
                <br />
                FPSゲーマーのために、精度と速さを極限まで追求しました。
              </p>
              <Link
                to="/products/kylith-75-HE"
                className="text-xs text-kui-primary flex items-center gap-1 hover:underline"
              >
                詳しく見る
                <FiChevronRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <h3 className="text-base font-semibold mb-4 text-kui-default">
            シリーズ別
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {series.map((series) => (
              <div key={series.id} className="space-y-3">
                <Link
                  to={`/keyboards?series=${series.id}`}
                  className="block text-xs hover:text-kui-primary transition-colors font-semibold flex items-center gap-2"
                  onClick={() => closeAllDropdowns()}
                >
                  {series.description}
                  {series.status === "new" && (
                    <KuiTag color="primary" size="xsmall" variant="soft">
                      新製品
                    </KuiTag>
                  )}
                </Link>
                {products
                  .filter((product) => product.series === series.id)
                  .map((product) => (
                    <Link
                      to={`/products/${product.id}`}
                      key={product.id}
                      className="block hover:text-kui-primary transition-colors"
                      onClick={() => closeAllDropdowns()}
                    >
                      {product.name}
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </NavigationDropdown>
  );
}
