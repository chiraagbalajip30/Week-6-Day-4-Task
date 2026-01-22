// Day-3 Remove Item Logic + add intelligence without storing extra state

import { createContext, useState } from "react";

// 1️⃣ Create the context
export const cartContext = createContext();

// 2️⃣ Create the Provider component
const CartProvider = ({ children }) => {
  // 3️⃣ Global cart state
  const [cartItems, setCartItems] = useState([]);

  // 4️⃣ Improved addToCart logic (no duplicates)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // product already in cart → increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      // product not in cart → add with quantity = 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // 5: Increase quantity
  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // 5: Decrease quantity (minimum = 1)
  const decreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // 6: Remove item completely
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // 7:  Derived state
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // 8 Return the Provider component
  return (
    <cartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;

// -------------------------------------------

// Day-3 Quantity Logic

// import { createContext, useState } from "react";

// // 1️⃣ Create the context
// export const cartContext = createContext();

// // 2️⃣ Create the Provider component
// const CartProvider = ({ children }) => {
//   // 3️⃣ Global cart state
//   const [cartItems, setCartItems] = useState([]);

//   // 4️⃣ Improved addToCart logic (no duplicates)
//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === product.id);

//       if (existingItem) {
//         // product already in cart → increase quantity
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item,
//         );
//       }

//       // product not in cart → add with quantity = 1
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   // 5: Increase quantity
//   const increaseQty = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
//       ),
//     );
//   };

//   // 5: Decrease quantity (minimum = 1)
//   const decreaseQty = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item,
//       ),
//     );
//   };

//   // 6️⃣ Return the Provider component
//   return (
//     <cartContext.Provider value={{ cartItems, addToCart, increaseQty, decreaseQty }}>
//       {children}
//     </cartContext.Provider>
//   );
// };

// export default CartProvider;

// -------------------------------------------
// Day-3 Cart Logic

// import { createContext, useState } from "react";

// // 1️⃣ Create the context
// export const cartContext = createContext();

// // 2️⃣ Create the Provider component
// const CartProvider = ({ children }) => {
//   // 3️⃣ Global cart state
//   const [cartItems, setCartItems] = useState([]);

//   // 4️⃣ Improved addToCart logic (no duplicates)
//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === product.id);

//       if (existingItem) {
//         // product already in cart → increase quantity
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item,
//         );
//       }

//       // product not in cart → add with quantity = 1
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   // 6️⃣ Return the Provider component
//   return (
//     <cartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </cartContext.Provider>
//   );
// };

// export default CartProvider;

//  ------------------------------------------------

// Day-2 Logic

// import { createContext, useState } from "react";

// // 1️⃣ Create the context
// export const cartContext = createContext();

// // 2️⃣ Create the Provider component
// const CartProvider = ({ children }) => {
//   // 3️⃣ Global cart state
//   const [cartItems, setCartItems] = useState([]);

//   // 4️⃣ Action: add item to cart
//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   // 5️⃣ Action: remove item from cart
//   // const removeFromCart = (product) => {
//   //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
//   // };

//   // 6️⃣ Return the Provider component
//   return (
//     <cartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </cartContext.Provider>
//   );
// };

// export default CartProvider;
