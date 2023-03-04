import React, { useContext } from "react";
import styled from "styled-components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OffconvasContext } from "../../Context/offconvasContext";
import { CartContext } from "../../Context/cartContext";

// const Loading = styled.h1`
//   font-size: 4e;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   align-content: center;150vh
//   transition: all 0.5s ease-out;
// `;

const Container = styled.div`
  width: 600px;
  height: 130vh;
  margin: 0;
  padding: 0;
  top: 0;
  right: -660px;
  background-color: #3f3b3b;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 2;
  transform: translateX(100%);
  transition: all 2s 1s;

  &.click {
    right: 0px;
    transform: translateX(0);
  }
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
const NoItem = styled.span`
  width: 600px;
  height: 80vh;
  font-size: 2em;
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;
const LeftContainer = styled.div`
  width: 300px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: #3f3b3b;
  margin-left: 10px;
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
  color: #ffffff;
`;
const ProductRom = styled.span`
  color: #ffffff;
  font-size: 17px;
`;
const ProductPrice = styled.span`
  color: #ffffff;
  font-size: 20px;
`;
const ProductLimit = styled.span`
  color: #ffffff;
  font-size: 17px;
`;
const Limit = styled.span`
  margin: 0 17px;
  color: #ffffff;
`;
const Amount = styled.span`
  color: #ffffff;
  font-size: 17px;
`;
const TotalSummary = styled.div`
  font-size: 21px;
  font-weight: bold;
  width: 600px;
  height: 4em;
  margin-top: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #3f3b3b;
`;
const CartItem = () => {
  const { closeHandle } = useContext(OffconvasContext);
  const { cartItem, decreaseQty, addToCart } = useContext(CartContext);
  const totalSummaryPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <Container className="click">
      <CartTitileContainer>
        <CartTitle>
          Cart Items
          <CloseButton onClick={closeHandle}>
            <FontAwesomeIcon icon={faXmark} size="2xl" />
          </CloseButton>
        </CartTitle>
      </CartTitileContainer>
      <hr />

      {cartItem.length === 0 && <NoItem>No items in the cart!</NoItem>}
      {cartItem.map((item) => {
        const totoalPrice = item.price * item.qty;

        return (
          <div key={item.id}>
            <Wrapper>
              <LeftContainer>
                <img src={item.image} width={170} alt="" />
              </LeftContainer>
              <RightContainer>
                <ProductName>{item.name}</ProductName>
                <ProductRom>({item.rom})</ProductRom>
                <ProductPrice>{item.price}MMK</ProductPrice>
                <ProductLimit>
                  <FontAwesomeIcon
                    onClick={() => decreaseQty(item)}
                    icon={faCircleArrowLeft}
                    size="xl"
                  />

                  <Limit>{item.qty}</Limit>
                  <FontAwesomeIcon
                    onClick={() => addToCart(item)}
                    icon={faCircleArrowRight}
                    size="xl"
                  />
                </ProductLimit>
                <Amount> Total : {totoalPrice}MMK</Amount>
              </RightContainer>
            </Wrapper>
            <hr></hr>
          </div>
        );
      })}
      <TotalSummary>Total Summary Price : {totalSummaryPrice} MMK</TotalSummary>
    </Container>
  );
};

export default CartItem;
