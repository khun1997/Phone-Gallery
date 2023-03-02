import React, { useContext } from "react";

import CartItem from "../CartItem/cartItem";
import { OffconvasContext } from "../../Context/offconvasContext";

const Offconvas = () => {
  const { isOpen } = useContext(OffconvasContext);

  return <div>{isOpen ? <CartItem></CartItem> : <></>}</div>;
};

export default Offconvas;
