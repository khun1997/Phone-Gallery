// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
// import React from "react";
// import useMockApiData from "../../customHooks/useMockApiData";

// const Section = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 2em;
// `;
// const Card = styled.div`
//     margin:1em;
//     width:18em;
//     height:23em;
//     background-color:#3f3b3b;
//     border:1px solid #f5eded;
//     border-radius:15px;
//     justify-content:center;
//     align-content;center;
//     position:relative;
 
// &:hover{
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
//   transform: scale(1.08);
//   transition:0.8s;
// }
// `;

// const Image = styled.img`
//   width: 18em;
//   height: 18em;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Text = styled.text`
//   width: 14em;
//   font-size: 20px;
//   color: white;
//   margin-top: 7px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Text1 = styled.text`
//   width: 14em;
//   color: white;
//   font-size: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Button = styled.button`
//   border: none;
//   color: #3f3b3b;
//   position: absolute;
//   background-color: white;
//   top: 0;
//   right: 0;
//   cursor: pointer;
// `;
// function Cards() {
 
//   const  products  = useMockApiData();
  
 

//   return (
    
//     <Section>
      
//       {products.map((product) => (
//         <Card key={product.id}>
//           <Image src={product.img} alt=""></Image>
//           <Text>
//             {product.name} ({product.rom})
//           </Text>
//           <br></br>
//           <Text1>{product.price}</Text1>
//           <Link to={`/product/${product.id}`}>
//             <>
//               <Button>
//                 <FontAwesomeIcon icon={faCircleInfo} size="2xl" />
//               </Button>
//             </>
//           </Link>
//         </Card>
//       ))}
      
//     </Section>
    
//   );
// }
// export default Cards;
// // <div>
// //     <h1>Card</h1>
// //     {/* <div>
// //       {products.map((product)=>{
// //         return(
// //           <div key={product.id}>{product.name}</div>
// //           )
// //         })}
// //     </div> */}
// //   </div>

// // const products = products.map((product)=>{
// //   return(
// //     <div>
// //       <div key={product.id}>
// //         {product.name}
// //       </div>
// //     </div>
// //   )
// // // })
// // const {id,name,rom,price,detail} = product;

// // import React from "react";
// // // import { ProductContext } from "../../hooks/productContext";

// // const Card = () => {
// //   return (
// //     <div>
// //       <h1>Card</h1>
// //     </div>
// //   )
// // }

// // export default Card;
