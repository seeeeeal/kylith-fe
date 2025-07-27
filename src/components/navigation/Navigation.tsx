import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import {
  FiChevronDown,
  FiSearch,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";
import { KuiIconButton, KuiBadgeWrapper } from "@/components/kui";
import { CartContext } from "@/context/CartContext";
import { useDropdown } from "@/hooks/useDropdown";
import KeyboardDropdown from "./KeyboardDropdown";
import AccessoryDropdown from "./AccessoryDropdown";
import clsx from "clsx";

const NAV_ITEMS = [
  { key: "keyboards", path: "/keyboards", hasDropdown: true },
  // { key: "accessories", path: "/accessories", hasDropdown: true },
  { key: "support", path: "/support", hasDropdown: false },
] as const;

export default function Navigation() {
  const { t } = useTranslation();
  const { cartItems } = useContext(CartContext);
  const {
    activeDropdown,
    handleDropdownOpen,
    handleDropdownClose,
    closeAllDropdowns,
  } = useDropdown();

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-white border-b border-kui-border sticky top-0 z-20 relative">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo & Navigation */}
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-3xl sm:text-4xl font-bold">Kylith</h1>
          </Link>

          <nav className="ml-8 sm:ml-12 space-x-1 sm:space-x-2 text-xs font-semibold flex items-center">
            {NAV_ITEMS.map(({ key, path, hasDropdown }) => (
              <div
                key={key}
                className={clsx(
                  "relative group hover:bg-kui-default/5 py-1 px-2 rounded-md transition-colors",
                  activeDropdown === key && "bg-kui-default/5"
                )}
              >
                <Link
                  to={path}
                  className="inline-flex items-center gap-1 transition-colors"
                  onMouseEnter={
                    hasDropdown
                      ? () => handleDropdownOpen(key as any)
                      : () => closeAllDropdowns()
                  }
                >
                  {t(`nav.${key}`)}
                  {hasDropdown && (
                    <FiChevronDown
                      className={clsx(
                        "transition-transform",
                        activeDropdown === key ? "rotate-180" : ""
                      )}
                    />
                  )}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="bg-kui-default/5 flex items-center rounded px-2 py-1">
            <input
              type="text"
              className="w-20 sm:w-32 text-sm focus:outline-none placeholder:text-xxs"
              placeholder={t("common.search")}
            />
            <FiSearch className="text-kylith text-xs" />
          </div>

          <nav className="flex items-center space-x-1 sm:space-x-2">
            <Link to="/cart">
              <KuiIconButton size="medium" variant="text" aria-label="User">
                <FiUser />
              </KuiIconButton>
            </Link>
            <Link to="/cart">
              <KuiBadgeWrapper
                badgeContent={cartItemCount}
                offset={{ top: "0.25rem", right: "0.25rem" }}
              >
                <KuiIconButton size="medium" variant="text" aria-label="Cart">
                  <FiShoppingCart />
                </KuiIconButton>
              </KuiBadgeWrapper>
            </Link>
          </nav>
        </div>
      </div>

      {/* Dropdowns */}
      <KeyboardDropdown
        isOpen={activeDropdown === "keyboards"}
        onMouseLeave={() => handleDropdownClose("keyboards")}
        closeAllDropdowns={closeAllDropdowns}
      />
      <AccessoryDropdown
        isOpen={activeDropdown === "accessories"}
        onMouseLeave={() => handleDropdownClose("accessories")}
      />
    </header>
  );
}
