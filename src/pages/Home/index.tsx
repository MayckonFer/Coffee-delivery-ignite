import { MainContainer, AboutCoffeContainer, CoffesContainer } from "./styles";

import imgHomeCoffe from "/assets/images/img-home-coffe.png";

import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";

import { CoffeCard } from "../../components/CoffeCard";

import { ToastContainer } from "react-toastify";

export function Home() {
  return (
    <>
      <MainContainer>
        <AboutCoffeContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul>
              <li>
                <span>
                  <ShoppingCart size={16} color="#ffffff" weight="fill" />
                </span>{" "}
                Compra simples e segura
              </li>
              <li>
                <span>
                  <Package size={16} color="#ffffff" weight="fill" />
                </span>{" "}
                Embalagem mantém o café intacto
              </li>
              <li>
                <span>
                  <Timer size={16} color="#ffffff" weight="fill" />
                </span>{" "}
                Entrega rápida e rastreada
              </li>
              <li>
                <span>
                  <Coffee size={16} color="#ffffff" weight="fill" />
                </span>{" "}
                O café chega fresquinho até você
              </li>
            </ul>
          </div>

          <img src={imgHomeCoffe} alt="Coffe Delivery" />
        </AboutCoffeContainer>

        <CoffesContainer>
          <h2>Nossos cafés</h2>

          <div>
            <CoffeCard />
          </div>
        </CoffesContainer>
      </MainContainer>
      <ToastContainer style={{ zIndex: 1000, fontSize: 16 }} />
    </>
  );
}
