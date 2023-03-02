import React, { useContext } from "react";
import styled from "styled-components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OffconvasContext } from "../../Context/offconvasContext";
import { CartContext } from "../../Context/cartContext";

const Loading = styled.h1`
  font-size: 4e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  transition: all 0.5s ease-out;
`;

const Container = styled.div`
  background-color: red;
  width: 600px;
  height: 100vh;
  margin: 0;
  padding: 0;
  top: 0;
  right: 0;
  background-color: #ffffff;
  position: fixed;
  z-index: 2;
  transition: all 5s ease-out;
`;
const CartTitileContainer = styled.div`
  width: 600px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #3f3b3b;
`;
const CartTitle = styled.text`
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
`;
const CloseButton = styled.button`
  border: none;
  align-items: center;
  font-size: 16px;
  margin-left: 200px;
  color: #ffffff;
  background-color: #3f3b3b;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const LeftContiner = styled.div`
  width: 300px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
// const Image = styled.image`
//   /* background-color: red;
//   width: 200px;
//   height: 200px; */
// `;

const RightContiner = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const ProductName = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #3f3b3b;
`;
const ProductRom = styled.span`
  color: #3f3b3b;
  font-size: 20px;
`;
const ProductPrice = styled.span`
  color: #3f3b3b;
  font-size: 25px;
`;
const ProductLimit = styled.span`
  color: #3f3b3b;
  font-size: 20px;
`;
const Limit = styled.span`
  margin: 0 20px;
  color: #3f3b3b;
`;
const Amount = styled.span`
  color: #3f3b3b;
  font-size: 20px;
`;

const CartItem = () => {
  const { closeHandle } = useContext(OffconvasContext);
  const { product } = useContext(CartContext);

  if (product.length === 0) {
    return <Loading>Loading . . . . . .</Loading>;
  }

  return (
    <div>
      <Container>
        <CartTitileContainer>
          <CartTitle>
            Cart Items
            <CloseButton onClick={closeHandle}>
              <FontAwesomeIcon icon={faXmark} size="2xl" />
            </CloseButton>
          </CartTitle>
        </CartTitileContainer>
        <Wrapper>
          <LeftContiner>
            {/* <Image src={product.image} alt=""/> */}
            <img src={product.image} alt="" width={300} />
          </LeftContiner>
          <RightContiner>
            <ProductName>{product.name}</ProductName>
            <ProductRom>({product.rom})</ProductRom>
            <ProductPrice>{product.price}</ProductPrice>

            <ProductLimit>
              <FontAwesomeIcon icon={faCircleArrowLeft} size="xl" />
              <Limit>4</Limit>
              <FontAwesomeIcon icon={faCircleArrowRight} size="xl" />
            </ProductLimit>
            <Amount> Cost : {product.price}</Amount>
          </RightContiner>
        </Wrapper>
        <hr></hr>
      </Container>
    </div>
  );
};

export default CartItem;
