/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContainerCoffeInTheCart, MessageNotCoffe } from "./styles";

import { ButtonComponent } from "../ButtomComponent";

import { Trash, Plus, Minus } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCartContext";
import { CartState, Coffe } from "../../interface";

export function CoffeInTheCart() {
  const { cart, setCart } = useCart() as CartState;

  function handleDecrementCoffe(coffeId: number) {
    const updatedCart = cart.map((item: any) => {
      if (item.id === coffeId) {
        if (item.amount > 1) {
          item.price = item.price - item.price / item.amount;
          item.amount -= 1;
        }
      }
      return item;
    });

    setCart(updatedCart);
  }

  function handleAddCoffe(coffeId: number) {
    const updatedCart = cart.map((item: any) => {
      if (item.id === coffeId) {
        item.amount += 1;
        item.price = item.amount + item.price;
      }
      return item;
    });

    setCart(updatedCart);
  }

  function handleRemoveCoffe(id: number) {
    const removeCoffe = cart.filter((coffe: any) => coffe.id !== id);

    setCart(removeCoffe);

    localStorage.setItem("cart", JSON.stringify(removeCoffe));
  }

  return (
    <>
      {cart.length ? (
        cart.map((item: Coffe) => (
          <ContainerCoffeInTheCart key={item.id}>
            <img src={item.img} alt={item.title} />

            <div>
              <span>{item.title}</span>
              <div>
                <div>
                  <button
                    type="button"
                    title="Diminuir quantidade"
                    onClick={() => handleDecrementCoffe(item.id)}
                  >
                    <Minus size={14} color="#8047F8" weight="bold" />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    type="button"
                    title="Aumentar quantidade"
                    onClick={() => handleAddCoffe(item.id)}
                  >
                    <Plus size={14} color="#8047F8" weight="light" />
                  </button>
                </div>
                <ButtonComponent onClick={() => handleRemoveCoffe(item.id)}>
                  <Trash size={16} color="#8047F8" weight="bold" />
                  remover
                </ButtonComponent>
              </div>
            </div>
            <p>
              {item.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </ContainerCoffeInTheCart>
        ))
      ) : (
        <MessageNotCoffe>Ainda não tem nenhum café</MessageNotCoffe>
      )}
    </>
  );
}
