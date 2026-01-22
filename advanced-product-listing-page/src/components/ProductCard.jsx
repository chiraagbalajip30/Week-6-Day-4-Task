import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(cartContext);

  return (
    <div className="border border-gray-200 rounded-md p-4 flex items-center justify-between">
      <div>
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600">₹{product.price}</p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="px-4 py-1 text-sm bg-black text-white rounded hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
