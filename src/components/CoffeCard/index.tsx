/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ContainerCoffeCard,
  ContainerTags,
  ContainerFooter,
  ContainerCount,
} from "./styles";

import { useCart } from "../../hooks/useCartContext";

import { ShoppingCart, Minus, Plus } from "@phosphor-icons/react";

import { CartState, Coffe } from "../../interface";
import { AlertError } from "../AlertError";

export function CoffeCard() {
  const { cart, setCart, amountCoffe, setAmountCoffe } = useCart() as CartState;

  const coffe = [
    {
      id: 1,
      img: "/assets/images/expresso.png",
      tags: ["TRADICIONAL"],
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 2.0,
      amount: amountCoffe,
    },
    {
      id: 2,
      img: "/assets/images/americano.png",
      tags: ["TRADICIONAL"],
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 3.0,
      amount: amountCoffe,
    },
    {
      id: 3,
      img: "/assets/images/expresso-cremoso.png",
      tags: ["TRADICIONAL"],
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 5.9,
      amount: amountCoffe,
    },
    {
      id: 4,
      img: "/assets/images/americano.png",
      tags: ["TRADICIONAL", "GELADO"],
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 5.25,
      amount: amountCoffe,
    },
    {
      id: 5,
      img: "/assets/images/cafe-com-leite.png",
      tags: ["TRADICIONAL", "COM LEITE"],
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 7.65,
      amount: amountCoffe,
    },
    {
      id: 6,
      img: "/assets/images/latte.png",
      tags: ["TRADICIONAL", "COM LEITE"],
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
      amount: amountCoffe,
    },
    {
      id: 7,
      img: "/assets/images/capuccino.png",
      tags: ["TRADICIONAL", "COM LEITE"],
      title: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 11.9,
      amount: amountCoffe,
    },
    {
      id: 8,
      img: "/assets/images/macchiato.png",
      tags: ["TRADICIONAL", "COM LEITE"],
      title: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 8.0,
      amount: amountCoffe,
    },
    {
      id: 9,
      img: "/assets/images/mochaccino.png",
      tags: ["TRADICIONAL", "COM LEITE"],
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 12.0,
      amount: amountCoffe,
    },
    {
      id: 10,
      img: "/assets/images/chocolate-quente.png",
      tags: ["ESPECIAL", "COM LEITE"],
      title: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 10.9,
      amount: amountCoffe,
    },
    {
      id: 11,
      img: "/assets/images/cubano.png",
      tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 14.9,
      amount: amountCoffe,
    },
    {
      id: 12,
      img: "/assets/images/havaiano.png",
      tags: ["ESPECIAL"],
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 6.25,
      amount: amountCoffe,
    },
    {
      id: 13,
      img: "/assets/images/arabe.png",
      tags: ["ESPECIAL"],
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 25.9,
      amount: amountCoffe,
    },
    {
      id: 14,
      img: "/assets/images/irlandes.png",
      tags: ["ESPECIAL", "ALCOÓLICO"],
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 19.9,
      amount: amountCoffe,
    },
  ];

  function handleDecrementCoffe(coffeId: number) {
    setAmountCoffe((prevState: any) => {
      return {
        ...prevState,
        [coffeId]: (prevState[coffeId] || 1) - 1,
      };
    });
  }

  function handleAddCoffe(coffeId: number) {
    setAmountCoffe((prevState: any) => {
      return {
        ...prevState,
        [coffeId]: (prevState[coffeId] || 1) + 1,
      };
    });
  }

  function handleAddCoffeInTheCart(coffeId: number) {
    const selectCoffe = coffe.find((coffes) => coffes.id === coffeId);

    if (selectCoffe) {
      const coffeeInCart = cart.find((item) => item.id === coffeId);

      if (coffeeInCart) {
        return AlertError("Você já adicionou esse café!");
      }

      const coffeeAmount = amountCoffe[coffeId] || 1;

      const newCoffe: Coffe = {
        id: selectCoffe.id,
        img: selectCoffe.img,
        tags: selectCoffe.tags,
        title: selectCoffe.title,
        description: selectCoffe.description,
        price: selectCoffe.price * (amountCoffe[coffeId] || 1),
        amount: coffeeAmount,
      };

      localStorage.setItem("cart", JSON.stringify([...cart, newCoffe]));

      setCart((prevState) => [...prevState, newCoffe]);
    }
  }

  return (
    <>
      {coffe.map((coffes) => (
        <ContainerCoffeCard key={coffes.id}>
          <img src={coffes.img} alt={coffes.title} />
          <ContainerTags>
            {coffes.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </ContainerTags>
          <h4>{coffes.title}</h4>
          <p>{coffes.description}</p>
          <ContainerFooter>
            <span>
              <strong>
                {(
                  coffes.price * amountCoffe[coffes.id] || coffes.price
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </span>
            <ContainerCount>
              <div>
                <button
                  type="button"
                  title="Diminuir"
                  onClick={() => handleDecrementCoffe(coffes.id)}
                >
                  <Minus size={14} color="#8047F8" weight="bold" />
                </button>
                <span>{amountCoffe[coffes.id] || 1}</span>
                <button
                  type="button"
                  title="Adicionar"
                  onClick={() => handleAddCoffe(coffes.id)}
                >
                  <Plus size={14} color="#8047F8" weight="bold" />
                </button>
              </div>

              <button
                type="button"
                title="Adicionar no carrinho"
                onClick={() => handleAddCoffeInTheCart(coffes.id)}
              >
                <ShoppingCart size={22} color="#ffffff" weight="fill" />
              </button>
            </ContainerCount>
          </ContainerFooter>
        </ContainerCoffeCard>
      ))}
    </>
  );
}
