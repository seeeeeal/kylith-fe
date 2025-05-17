import React from "react";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Hero from "./pages/Hero";
import ProductListPage from "./pages/ProductListPage";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import { KuiBadge, KuiBadgeWrapper, KuiIconButton } from "@/components/kui";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="bg-white text-kui-default min-h-screen ">
          <header className="bg-white shadow-md sticky top-0 z-20 text-kylith">
            <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-8 py-4">
              <div className="flex items-center space-x-10">
                <Link to="/">
                  <h1 className="text-4xl font-bold font-sans">Kylith</h1>
                </Link>

                <nav className="space-x-4 text-sm">
                  <Link
                    to="/products"
                    className="text-kylith hover:text-kylith-dark transition"
                  >
                    KEYBOARD
                  </Link>
                  <Link
                    to="/products"
                    className="text-kylith hover:text-kylith-dark transition"
                  >
                    ACCESSORIES
                  </Link>
                  <Link
                    to="/products"
                    className="text-kylith hover:text-kylith-dark transition"
                  >
                    SUPPORT
                  </Link>
                </nav>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-kui-default/5 flex items-center rounded px-2 py-1">
                  <input type="text" />
                  <FiSearch className="text-kylith text-base " />
                </div>

                <nav className="flex items-center space-x-2">
                  <Link to="/cart">
                    <KuiIconButton size="medium" variant="text">
                      <FiUser />
                    </KuiIconButton>
                  </Link>
                  <Link to="/cart">
                    <KuiBadgeWrapper
                      badgeContent={6}
                      offset={{ top: "0.25rem", right: "0.25rem" }}
                    >
                      <KuiIconButton size="medium" variant="text">
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
              <Route path="/" element={<Hero />} />
              <Route path="/products" element={<ProductListPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
