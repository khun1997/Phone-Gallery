// import React,{useState,useEffect} from "react";
// import { useEffect, useState } from "react";

// import UseApiFetch from "../../hooks/useApiFetch";
// import { useParams } from "react-router-dom";

// const Product = ()=>{

//     const {id} = useParams();
//     const [product ,setProduct] = useState([]);
//     const [loading,setLoading] = useState(false);
   

//     useEffect(()=>{
//         const getProduct = async ()=>{
//             setLoading(true);
//             const response = await fetch('https://d3b3d23b-c5f1-4f6f-b95b-bcae1d1a4440.mock.pstmn.io/${id}');
//             setProduct(await response.json());
//             setLoading(false);
//         }
//         getProduct();
//     },[])

// }
// const Loading = ()=>{
//     return(
//         <>
//         Loading......</>
//     )
// }
// const ShowProduct = ()=>{
//     return(
//         <>
//             <h1>hello</h1>
//         </>
//     )
// }

// function Detail(){
//     const [showProduct,setShowProduct] = useState();
//     useEffect(()=>{
//         const CardLists = UseApiFetch();
//         const ShowProduct = (product)=>{
// //             const filteredProduct = CardLists.filter((x)=> x.id === product);
    
// //         }
// //         setShowProduct(showProduct);

// //     },[])
// import Topbar from "../../components/TopBar";



    
// function ProjectDetail(){
    
//     return(
//         <>
//         <Topbar/>
//         <h1>project detail</h1>
        

//         </>
//     )
// }

// export default ProjectDetail;

import React from 'react'

function ProductDetail() {
  return (
    <h1>ProductDetail</h1>
  )
}

export default ProductDetail;