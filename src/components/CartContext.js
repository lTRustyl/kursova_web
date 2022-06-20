import React, { createContext, useContext, useState } from 'react';

const cartContext = createContext({ cart: [], updateCart: () => {} });

export const CartContext = ({ children }) => {
  const [cartValue, setCartValue] = useState([]);
  const updateCart = (id, value) => {
    if (cartValue.find((x) => x.id === id)) {
      setCartValue(cartValue.filter((x) => x.id !== id));
    } else setCartValue([...cartValue, value]);
  };
  return (
    <cartContext.Provider value={{ cart: cartValue, updateCart }}>{children}</cartContext.Provider>
  );
};
export const useCartContext = () => useContext(cartContext);
