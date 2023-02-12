// import React,{useState,useEffect} from "react";
// import { useEffect, useState } from "react";

// import UseApiFetch from "../../hooks/useApiFetch";
// import { useParams } from "react-router-dom";

// const Product = ()=>{


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
const DetailText = styled.text`
width:100%;
height:2em;
font-size:3em;
margin-top:0.5em;
background-color:#3f3b3b;
color:white;
border-top:1px solid #3f3b3b;
  display:flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const Section = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-warp: warp;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 6em;

`;
const Container = styled.div`
  display: flex;
  margin-bottom:15em;
  justify-content:center;
  align-items:center;
  align-content:center;
  border: 2px solid wheat;
  padding:1em;
  
`;
const ImageContainer = styled.div`
  width: 34em;
  height: 34em;

  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 30em;
  height: 30em;
`;
const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content:center;
  gap:2em;
  margin-right:8em;
`;
const Text = styled.text`
width:10em;
height:5em;

font-size:3.5em;
display:flex;
justify-content:center;
align-items:center;
  font-weight: bold;
  color:#3f3b3b;
  
  
`;
const Text1 = styled.text`
  width:300px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  margin-bottom:em;
  border:2px solid #3f3b3b;
  border-radius:10px;
  background-color: #3f3b3b;
`;
const Button = styled.button`
  width: 8em;
  height: 3em;
  font-size: 20px;
  font-weight:bold;
  border: 4px solid #3f3b3b;
  border-radius: 10px;
  background-color: white;
  color: #3f3b3b;

&:hover{
  color:white;
  background-color: #3f3b3b;
}
`;
function ProductDetail() {
 
  //call products from ProductContext by using useContext 
  const { products } = useContext(ProductContext);
  console.log(products)
  const { id } =useParams();
  console.log(id)
  const product = products.find((product) => product.id == id);
  console.log(product)
  // const { id,name,price,rom } = product;
  

  return (
    <>
    <div><DetailText>Product Detail</DetailText></div>
      <Section>
        <Container key={product.id}>
          <ImageContainer>
            <Image src={product.img} alt={product.name}></Image>
          </ImageContainer>
          <TextContainer>
            <Text>
              {product.name}
              <br />({product.rom})
              <br />
              <br/>
            </Text>
              <Text1> Price: {product.price} </Text1>
            <Button>Buy</Button>
          </TextContainer>
        </Container>
      </Section>
    </>
  );
}

export default ProductDetail;
