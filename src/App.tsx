import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { CartProvider } from "@/context/CartContext";
import Navigation from "@/components/navigation/Navigation";
import CheckoutNavigation from "@/components/navigation/CheckoutNavigation";
import LandingPage from "@/pages/LandingPage";
import KeyboardsPage from "@/pages/KeyboardsPage";
import NotFound from "@/pages/NotFound";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderComplete from "@/pages/OrderComplete";
import Footer from "@/components/Footer";
import { useEffect } from "react";

function AppContent() {
  const location = useLocation();

  // Checkout and Order Complete pages use a simple navigation bar and hide footer
  const isCheckoutPage =
    location.pathname === "/checkout" ||
    location.pathname === "/order-complete";

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return !isCheckoutPage ? (
    <div className="bg-white text-kui-default flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 min-h-0">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/keyboards" element={<KeyboardsPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
    </div>
  ) : (
    <div className="bg-white text-kui-default">
      <CheckoutNavigation />

      <main className="flex-1 min-h-0">
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-complete" element={<OrderComplete />} />
        </Routes>
      </main>
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
