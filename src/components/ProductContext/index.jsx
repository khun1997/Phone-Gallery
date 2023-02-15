// import  { useEffect, useState } from "react";

// function UseApiFetch(){
//     const [products,setProducts] = useState([]);

//     useEffect(()=>{
//         fetch('https://d3b3d23b-c5f1-4f6f-b95b-bcae1d1a4440.mock.pstmn.io')
//         .then(response =>response.json())
//         .then(products => setProducts(products));
//     },[]);

//     return products;

// }
// export default  UseApiFetch;
// import React, { useState, useEffect, createContext } from "react";
// export const ProductContext = createContext();
// const url = "https://d3b3d23b-c5f1-4f6f-b95b-bcae1d1a4440.mock.pstmn.io";

// const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const FetchData = async () => {
//       const response = await fetch(url);
//       const data = await response.json();
//       setProducts(data);
//     };
//     FetchData();
//   }, []);

//   return (
//     <ProductContext.Provider value={{ products }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };
// export default ProductProvider;
// import { createContext, useContext, useEffect, useState } from "react";
// import useMockApiData from "../../customHooks/useMockApiData";

// export const DataContext = createContext();

// const url = "https://d3b3d23b-c5f1-4f6f-b95b-bcae1d1a4440.mock.pstmn.io";
// const { products } = useMockApiData(url);
// export default function Productlist({ children }) {
//   // const {data ,isLoading} = useContext(DataContext);
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
    
//     setProducts(products);
//   }, []);

//   return (
//     <DataContext.Provider value={{ products }}>{children}</DataContext.Provider>
//   );
// }
