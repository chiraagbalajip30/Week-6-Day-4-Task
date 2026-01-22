import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const CartPanel = () => {
  const {
    cartItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(cartContext);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        🛒 Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <p className="text-4xl mb-3">🛍️</p>
          <p>Your cart is empty</p>
          <p className="text-sm mt-1">Start adding some products</p>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b pb-4"
              >
                {/* Left */}
                <div>
                  <h3 className="font-medium text-lg">{item.name}</h3>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      disabled={item.quantity === 1}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center
                        hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      −
                    </button>

                    <span className="font-semibold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center
                        hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:underline mt-3"
                  >
                    Remove
                  </button>
                </div>

                {/* Right */}
                <div className="font-semibold text-right">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-6 border-t pt-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPanel;
