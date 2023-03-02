import React, { createContext, useState } from "react";
export const OffconvasContext = createContext();
const OffconvasProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeHandle = () => {
    setIsOpen(false);
  };
  const openOffconvasHandle = () => {
    setIsOpen(true);
  };

  return (
    <OffconvasContext.Provider
      value={{ isOpen, setIsOpen, closeHandle, openOffconvasHandle }}
    >
      {children}
    </OffconvasContext.Provider>
  );
};

export default OffconvasProvider;
