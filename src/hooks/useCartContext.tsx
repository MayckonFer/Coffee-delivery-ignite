/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

import { ChildrenProps } from "../interface";

export const CartContext = createContext({});

interface CartItem {
  id: string;
  img: string[];
  tags: string[];
  title: string;
  description: string;
  price: number;
  amount: number;
}

export function ContextCartProvider({ children }: ChildrenProps) {
  const updatedCoffe = localStorage.getItem("cart");
  const newCoffe = updatedCoffe && JSON.parse(updatedCoffe);

  const [cart, setCart] = useState<CartItem[]>(newCoffe || []);
  const [amountCoffe, setAmountCoffe] = useState<number>(1);

  const [address, setAddress] = useState({});

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        amountCoffe,
        setAmountCoffe,
        address,
        setAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { useCart };
