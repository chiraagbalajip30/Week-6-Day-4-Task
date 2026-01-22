import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(cartContext);

  return (
    <nav className="p-[16px] border-b border-solid border-gray-400 flex justify-between bg-gray-300">
      <h1 className="text-xl font-semibold">My Store</h1>
      <div className="text-sm font-medium">
        🛒 Cart: <span className="font-bold">{cartItems.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
