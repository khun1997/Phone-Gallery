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
import { ProductContext } from "../../components/ProductContext/index";
import { useContext } from "react";
import styled from "styled-components";

const HeadText = styled.text`
  background-color: #3f3b3b;
  width: 100%;
  height: 9vh;
  font-size: 50px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Section = styled.section`
  background-color: #f6f0f0;
  width: 100%;
  height: 55em;
  display: flex;
  /* flex-flow: wrap column; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const ProductContainer = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const Image = styled.img`
  background-color: green;
  width: 500px;
  height: 500px;
  border: 4px solid white;
  border-radius: 20px;

  /* margin-left:10em; */
`;
const TextContainer = styled.div`
  /* background-color: pink; */
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductName = styled.text`
  /* background-color: yellow; */
  font-size: 60px;
  margin-top: 10px;
  font-style: Sans-serif;
`;

const ProductPrice = styled.text`
  /* background-color: grey; */
  font-size: 30px;
  margin-top: 40px;
`;

const ProductSpecification = styled.text`
  padding: 10px;
  margin: 20px 0px;
  font-style: italic;
`;

const Button = styled.button`
  display: flex;
  width: 200px;
  height: 40px;
  font-size: 30px;
  color: #3f3b3b;
  justify-content: center;
  border: 3px solid #3f3b3b;
  border-radius: 10px;

  &:hover {
    background-color: #3f3b3b;
    color: white;
  }
`;
function ProductDetail() {
  //call products from ProductContext by using useContext
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const product = products.find((product) => product.id == id);
  const { name, img, price, rom } = product;

  return (
    <>
      <HeadText>Product Detail</HeadText>
      <Section>
        <ProductContainer key={id}>
          <Image src={img} alt={name}></Image>
          <TextContainer>
            <ProductName>{name}</ProductName>
            <ProductPrice>Price : {price}</ProductPrice>
            <ProductSpecification>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ratione beatae ipsa ullam accusantium, debitis harum a cum sint in
              fugit. Debitis orem ipsum dolor sit amet consectetur adipisicing
              elit. Minima ratione beataeat, nulla dolore odit voluptatem earum
              facilis voluptatibus.
            </ProductSpecification>
            <Button>Buy</Button>
          </TextContainer>
        </ProductContainer>
      </Section>
    </>
  );
}

export default ProductDetail;
