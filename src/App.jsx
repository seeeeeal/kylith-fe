import { BrowserRouter, Routes, Route, Link } from "react-router";
import Hero from "./pages/Hero";
import ProductList from "./pages/ProductList";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="p-4 flex justify-between">
            <Link to="/" className="flex items-center">
              <img className="h-10" src="/logo.png" alt="" />
            </Link>
            <nav>
              <Link to="/" className="mr-4 hover:underline">
                Home
              </Link>
              <Link to="/products" className="mr-4 hover:underline">
                Products
              </Link>
              <Link to="/cart" className="hover:underline">
                Cart
              </Link>
            </nav>
          </header>
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
