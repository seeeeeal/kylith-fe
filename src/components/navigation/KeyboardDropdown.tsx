import { Link } from "react-router";
import NavigationDropdown from "./NavigationDropdown";

interface KeyboardDropdownProps {
  isOpen: boolean;
  onMouseLeave: () => void;
}

export default function KeyboardDropdown({
  isOpen,
  onMouseLeave,
}: KeyboardDropdownProps) {
  return (
    <NavigationDropdown isOpen={isOpen} onMouseLeave={onMouseLeave}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-kui-default">
            キーボードシリーズ
          </h3>
          <div className="space-y-3">
            <Link
              to="/keyboards"
              className="block hover:text-kui-primary transition-colors"
            >
              Kylith HE Series
            </Link>
            <Link
              to="/keyboards"
              className="block hover:text-kui-primary transition-colors"
            >
              Kylith Mag Switch
            </Link>
            <Link
              to="/keyboards"
              className="block hover:text-kui-primary transition-colors"
            >
              Kylith Linear
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-kui-default">特徴</h3>
          <div className="space-y-3">
            <div className="text-sm text-kui-secondary">
              <p>静かで高速なタイピング体験</p>
              <p>カスタマイズ可能なスイッチ</p>
              <p>プレミアムな素材とデザイン</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-kui-default">新着</h3>
          <div className="space-y-3">
            <Link
              to="/products/kylith-he"
              className="block hover:text-kui-primary transition-colors"
            >
              新製品: Kylith HE Pro
            </Link>
            <Link
              to="/keyboards"
              className="block hover:text-kui-primary transition-colors"
            >
              限定カラーコレクション
            </Link>
          </div>
        </div>
      </div>
    </NavigationDropdown>
  );
}
