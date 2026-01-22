import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const FloatingAddButton = () => {
  const { addToCart } = useContext(cartContext);

  const featuredProduct = {
    id: "featured-1",
    name: "Featured Product",
    price: 999,
  };

  return (
    <button
      onClick={() => addToCart(featuredProduct)}
      className="fixed bottom-6 right-6 bg-black text-white px-5 py-3 rounded-full shadow-lg hover:bg-gray-800 transition"
    >
      + Add Featured Item
    </button>
  );
};

export default FloatingAddButton;
