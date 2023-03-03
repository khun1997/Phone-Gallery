import React, { createContext, useState } from "react";
// import useMockApiData from "../customHooks/useMockApiData";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  // const products = useMockApiData();
  // const [product, setProduct] = useState([]);
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

  // const addToCart = (id) => {
  //   const tempCart = [...product];
  //   if (tempCart.some((item) => item.id === id)) {
  //     const index = tempCart.findIndex((item) => item.id === id);
  //     tempCart[index].quantity += 1;
  //   } else {
  //     const item = {
  //       ...products.find((product) => product.id === id),
  //       quantity: 1,
  //     };
  //     tempCart.push(item);
  //   }

  //   setProduct(tempCart);
  //   console.log(tempCart)
  // };
  
   //Step 2 :
   const [cartItem, setCartItem] = useState([])

   //Step 4 :
   const addToCart = (product) => {
     // if hamro product alredy cart xa bhane  find garna help garxa
     const productExit = cartItem.find((item) => item.id === product.id)
     // if productExit chai alredy exit in cart then will run fun() => setCartItem
     // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
     // gayara check garxa if item.id ra product.id chai match bhayo bhane
     // productExit product chai display garxa
     // ani increase  exits product QTY by 1
     // if item and product doesnt match then will add new items
     if (productExit) {
       setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
     } else {
       // but if the product doesnt exit in the cart that mean if card is empty
       // then new product is added in cart  and its qty is initalize to 1
       setCartItem([...cartItem, { ...product, qty: 1 }])
     }
   }

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
