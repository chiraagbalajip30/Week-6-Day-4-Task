import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { products } from "./data/products";
import CartProvider from "./context/CartContext";
import FloatingAddButton from "./components/FloatingAddButton";
import CartPanel from "./components/CartPanel";

function App() {
  return (
    <CartProvider>
      <div className="bg-gray-100 min-h-screen flex flex-col ">
        <Navbar />
        <CartPanel />
        <ProductList products={products} />
        {/* <FloatingAddButton /> */}
      </div>
    </CartProvider>
  );
}

export default App;
