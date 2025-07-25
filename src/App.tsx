import { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FiUser,
  FiShoppingCart,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import LandingPage from "./pages/LandingPage";
import KeyboardsPage from "./pages/KeyboardsPage";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderComplete from "./pages/OrderComplete";
import { CartProvider, CartContext } from "./context/CartContext";
import Footer from "./components/Footer";
import { KuiBadgeWrapper, KuiIconButton } from "@/components/kui";

function AppContent() {
  const { cartItems } = useContext(CartContext);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Calculate the total number of cart items
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    // Save language setting to LocalStorage
    localStorage.setItem("kylith-language", language);
  };

  // Load language setting from LocalStorage on initialization
  useEffect(() => {
    const savedLanguage = localStorage.getItem("kylith-language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      handleLanguageChange(savedLanguage);
    }
  }, []);

  return (
    <div className="bg-white text-kui-default min-h-screen ">
      <header className="bg-white border-b border-kui-border sticky top-0 z-20">
        <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-3xl sm:text-4xl font-bold">Kylith</h1>
            </Link>

            <nav className="ml-8 sm:ml-12 space-x-4 sm:space-x-6 text-xs font-semibold">
              <Link to="/keyboards" className="inline-flex items-center gap-1">
                {t("nav.keyboard")}
                <FiChevronDown />
              </Link>
              <Link
                to="/accessories"
                className="inline-flex items-center gap-1"
              >
                {t("nav.accessories")}
                <FiChevronDown />
              </Link>
              <Link to="/support" className="inline-flex items-center gap-1">
                {t("nav.support")}
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="bg-kui-default/5 flex items-center rounded px-2 py-1">
              <input
                type="text"
                className="w-20 sm:w-32 text-sm"
                placeholder={currentLanguage === "ja" ? "検索..." : "Search..."}
              />
              <FiSearch className="text-kylith text-base" />
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
      </header>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/keyboards" element={<KeyboardsPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-complete" element={<OrderComplete />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
