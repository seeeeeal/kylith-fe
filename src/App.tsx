import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "@/context/CartContext";
import Navigation from "@/components/navigation/Navigation";
import LandingPage from "@/pages/LandingPage";
import KeyboardsPage from "@/pages/KeyboardsPage";
import NotFound from "@/pages/NotFound";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderComplete from "@/pages/OrderComplete";
import Footer from "@/components/Footer";

function AppContent() {
  return (
    <div className="bg-white text-kui-default min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 min-h-0">
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
