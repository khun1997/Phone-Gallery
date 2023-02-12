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

import React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../hooks/productContext";
import { useContext } from "react";
import styled from "styled-components";

const Section = styled.section`
  width:100%,
  height:100%;
  display:flex;
  flex-direction:row;
  flex-warp:warp;
  justify-content:center;
  margin:10em 10em;
  border:2px solid wheat;
`;
// const Card = styled.div`

// `;
const Image = styled.img`
  width: 30em;
  height: 30em;
  
`;
const Text = styled.text`
  width:10em;
  margin-top: 1em;
  margin-left: 1em;
  font-size: 3em;
`;
const Container = styled.div`
  display: flex;
  flex-warp:warp;
  width: 30em;
  height: 30em;
`;
const Button =styled.button`
 width:8em;
 height:3em;
 color:white;
 border-radius:5px;
 background-color:#3f3b3b;
 
`;
function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find((item) => {
    return <div>{item.id === parseInt(id)}</div>;
  });

  return (
    <>
    <Section>
      <Image src={product.img}></Image>
      <Container>
        <Text>
          {product.name}
          <br />
          ({product.rom})
          <br />
          <br />
          Price: {product.price} 
          <br /><Button>Buy</Button>
        </Text>
      </Container>
      
    </Section>
    </>
      
  );
}

export default ProductDetail;
