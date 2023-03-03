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
  position: absolute;
  z-index: 2;
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
`;
const LeftContainer = styled.div`
  width: 300px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const RightContainer = styled.div`
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
  const { cartItem } = useContext(CartContext);
  console.log(cartItem);
  if (cartItem.length === 0) {
    return <Loading>Loading . . . . . .</Loading>;
  }

  return (
    <Container>
      <CartTitileContainer>
        <CartTitle>
          Cart Items
          <CloseButton onClick={closeHandle}>
            <FontAwesomeIcon icon={faXmark} size="2xl" />
          </CloseButton>
        </CartTitle>
      </CartTitileContainer>
      {cartItem.map((item) => {
        return (
          <div key={item.id}>
            <Wrapper>
              <LeftContainer>
                <img src={item.image} width={300} alt="" />
              </LeftContainer>
              <RightContainer>
                <ProductName>{item.name}</ProductName>
                <ProductRom>({item.rom})</ProductRom>
                <ProductPrice>{item.price}</ProductPrice>
                <ProductLimit>
                  <FontAwesomeIcon icon={faCircleArrowLeft} size="xl" />
                  <Limit>4</Limit>
                  <FontAwesomeIcon icon={faCircleArrowRight} size="xl" />
                </ProductLimit>
                <Amount> Cost : {item.price}</Amount>
              </RightContainer>
            </Wrapper>
            <hr></hr>
          </div>
        );
      })}
    </Container>
  );
};

export default CartItem;
