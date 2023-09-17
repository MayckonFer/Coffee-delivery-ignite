import { ContainerSuccessMain, ConfirmOrderContainer } from "./styles";

import imgSuccess from "/assets/images/Illustration.svg";

import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";

export function Success() {
  return (
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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{" "}
              Farrapos - Porto Alegre, RS
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
              Pagamento na entrega <strong>Cartão de Crédito</strong>
            </p>
          </li>
        </ul>
      </ConfirmOrderContainer>

      <img src={imgSuccess} alt="" />
    </ContainerSuccessMain>
  );
}
