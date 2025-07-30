import { Link } from "react-router";
import NavDropdown from "./NavDropdown";

interface AccessoryDropdownProps {
  isOpen: boolean;
  onMouseLeave: () => void;
}

export default function AccessoryDropdown({
  isOpen,
  onMouseLeave,
}: AccessoryDropdownProps) {
  return (
    <NavDropdown isOpen={isOpen} onMouseLeave={onMouseLeave}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-kui-default">
            アクセサリー
          </h3>
          <div className="space-y-3">
            <Link
              to="/accessories"
              className="block hover:text-kui-primary transition-colors"
            >
              キーキャップ
            </Link>
            <Link
              to="/accessories"
              className="block hover:text-kui-primary transition-colors"
            >
              ケーブル
            </Link>
            <Link
              to="/accessories"
              className="block hover:text-kui-primary transition-colors"
            >
              リストレスト
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-kui-default">
            メンテナンス
          </h3>
          <div className="space-y-3">
            <Link
              to="/accessories"
              className="block hover:text-kui-primary transition-colors"
            >
              クリーニングキット
            </Link>
            <Link
              to="/accessories"
              className="block hover:text-kui-primary transition-colors"
            >
              スイッチ潤滑剤
            </Link>
            <Link
              to="/accessories"
              className="block hover:text-kui-primary transition-colors"
            >
              工具セット
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-kui-default">
            カスタマイズ
          </h3>
          <div className="space-y-3">
            <Link
              to="/accessories"
              className="block hover:text-kui-primary transition-colors"
            >
              カスタムキーキャップ
            </Link>
            <Link
              to="/accessories"
              className="block hover:text-kui-primary transition-colors"
            >
              パーソナライズサービス
            </Link>
          </div>
        </div>
      </div>
    </NavDropdown>
  );
}
