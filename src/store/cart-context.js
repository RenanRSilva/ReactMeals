import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  clearCart: () => {},
});

export default CartContext;
