import React, { createContext, useState } from "react";
import useMockApiData from "../customHooks/useMockApiData";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const products = useMockApiData();
  const [product, setProduct] = useState([]);
  // const addToCart = (id) => {
  //   const cartItem = products.find((item) => {
  //     return item.id === id;
  //   });
  //   console.log(cartItem);
  //   if (cartItem) {
  //     const newCart = products.map((item) => {
  //       if (item.id === id) {
  //         return item ;
  //       } else {
  //         return item;
  //       }
  //     });
  //     setProduct(newCart)
  //   }
  // };

  const addToCart = (id) => {
    const tempCart = [...product];
    if (tempCart.some((item) => item.id === id)) {
      const index = tempCart.findIndex((item) => item.id === id);
      tempCart[index].quantity += 1;
    } else {
      const item = {
        ...products.find((product) => product.id === id),
        quantity: 1,
      };
      tempCart.push(item);
    }

    setProduct(tempCart);
    console.log(tempCart)
  };
  return (
    <CartContext.Provider value={{ product, setProduct, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
