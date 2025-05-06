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

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="bg-white text-kylith min-h-screen">
          <header className="bg-white px-8 py-4 flex justify-between items-center shadow-md sticky top-0 z-20 text-kylith">
            <div className="flex items-center space-x-8">
              <Link to="/">
                <h1 className="text-4xl font-bold font-sans">Kylith</h1>
              </Link>

              <nav className="space-x-4 text-xs">
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
              </nav>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center border border-kylith rounded px-2 py-1">
                <input type="text" />
                <FiSearch className="text-kylith text-xl " />
              </div>

              <nav className="flex items-center space-x-6">
                <Link
                  to="/cart"
                  className="text-kylith hover:text-kylith-dark transition text-xl"
                >
                  <FiUser />
                </Link>
                <Link
                  to="/cart"
                  className="text-kylith hover:text-kylith-dark transition text-xl"
                >
                  <FiShoppingCart />
                </Link>
              </nav>
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
