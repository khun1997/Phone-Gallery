import React from "react";
import useMockApiData from "../../customHooks/useMockApiData";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Loading = styled.h1`
  font-size: 4e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const Image = styled.img`
  width: 500px;
  height: 500px;
  border: 4px solid white;
  border-radius: 20px;
  ${mobile({
    marginTop: "-160px",
    width: "300px",
    height: "300px",
  })}
`;
const TextContainer = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductName = styled.text`
  font-size: 60px;
  margin-top: 10px;
  font-style: Sans-serif;
  ${mobile({ fontSize: "40px" })}
`;

const ProductPrice = styled.text`
  font-size: 30px;
  margin-top: 40px;
  ${mobile({ fontSize: "20px", marginTop: "5px" })}
`;

const ProductSpecification = styled.text`
  padding: 10px;
  margin: 20px 0px;
  font-style: italic;
  ${mobile({ fontSize: "15px", width: "350px" })}
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
  const url = "https://f6ff7d63-5ec3-4d2f-9304-97bdddc11461.mock.pstmn.io";

  const products = useMockApiData(url);

  const { id } = useParams();

  const product = products.find((product) => product.id == id);

  if (products.length === 0) {
    return <Loading>Loading . . . . . .</Loading>;
  }

  return (
    <>
      <HeadText>Product Detail</HeadText>
      <Section>
        <ProductContainer key={product.id}>
          <Image src={product.image} alt={product.name}></Image>
          <TextContainer>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>Price : {product.price}</ProductPrice>
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
