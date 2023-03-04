import React, { createContext, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [count, setCount] = useState(1);
  //add to cart section
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  //decrease qty
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        decreaseQty,
        setCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
