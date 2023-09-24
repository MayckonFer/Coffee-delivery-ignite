import { ContainerSuccessMain, ConfirmOrderContainer } from "./styles";

import { useCart } from "../../hooks/useCartContext";
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";

import imgSuccess from "/assets/images/Illustration.svg";
import { CartData } from "../../interface";

export function Success() {
  const { address } = useCart() as CartData;

  return (
    <>
      {address ? (
        <ContainerSuccessMain>
          <ConfirmOrderContainer>
            <header>
              <h2>Uhu! Pedido confirmado</h2>
              <p>Agora é só aguardar que logo o café chegará até você</p>
            </header>

            <ul>
              <li>
                <span>
                  <MapPin size={16} color="#ffffff" weight="fill" />
                </span>

                <p>
                  Entrega em{" "}
                  <strong>
                    Rua {address?.data?.street}, {address?.data?.number}
                  </strong>{" "}
                  - Farrapos - {address?.data?.city}, {address?.data?.state}
                </p>
              </li>
              <li>
                <span>
                  <Timer size={16} color="#ffffff" weight="fill" />
                </span>

                <p>
                  Previsão de entrega <strong>20 min - 30 min</strong>
                </p>
              </li>
              <li>
                <span>
                  <CurrencyDollar size={16} color="#ffffff" />
                </span>

                <p>
                  Pagamento na entrega{" "}
                  {(address?.methodPayment === "cartao-credito" && (
                    <strong>Cartão de Crédito</strong>
                  )) ||
                    (address?.methodPayment === "cartao-debito" && (
                      <strong>Cartão de Débito</strong>
                    )) ||
                    (address?.methodPayment === "dinheiro" && (
                      <strong>Dinheiro</strong>
                    ))}
                </p>
              </li>
            </ul>
          </ConfirmOrderContainer>

          <img src={imgSuccess} alt="" />
        </ContainerSuccessMain>
      ) : (
        <span>dasd</span>
      )}
    </>
  );
}
