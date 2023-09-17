import {
  CheckoutContainer,
  FormCheckoutContainer,
  FormAdress,
  WrapperInputs,
  ContainerPayment,
  ContainerCoffeSelected,
  WrapperCoffesSelectes,
  FooterCoffeSelected,
} from "./styles";

import {
  MapPinLine,
  CurrencyDollar,
  Money,
  Bank,
  CreditCard,
} from "@phosphor-icons/react";

import { InputComponent } from "../../components/InputComponent";
import { ButtonComponent } from "../../components/ButtomComponent";
import { CoffeInTheCart } from "../../components/CoffeInTheCart";
import { useCart } from "../../hooks/useCartContext";
import { CartState } from "../../interface";
import { ToastContainer } from "react-toastify";

export function Checkout() {
  const { cart } = useCart() as CartState;

  const delivery = 3.5;

  const itensCart = cart.map((item) => {
    return item.price;
  });

  const totalValueCoffes = itensCart.reduce(
    (valor, elemento) => valor + elemento,
    0
  );

  const valuefinal = totalValueCoffes + delivery;

  return (
    <>
      <CheckoutContainer>
        <FormCheckoutContainer>
          <h2>Complete seu pedido</h2>

          <FormAdress>
            <header>
              <MapPinLine size={22} color="#C47F17" weight="light" />

              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <WrapperInputs>
              <InputComponent
                type="text"
                id="cep"
                maxLength={8}
                placeholder="CEP"
              />

              <InputComponent type="text" id="street" placeholder="Rua" />
              <div className="footer_wrapperInputs">
                <InputComponent type="text" id="number" placeholder="Número" />
                <InputComponent
                  type="text"
                  id="complement"
                  placeholder="Complemento"
                  text="Opcional"
                />
                <InputComponent
                  type="text"
                  id="district"
                  placeholder="Bairro"
                />
                <InputComponent type="city" id="city" placeholder="Cidade" />
                <InputComponent type="text" id="uf" placeholder="UF" />
              </div>
            </WrapperInputs>
          </FormAdress>

          <ContainerPayment>
            <header>
              <CurrencyDollar size={22} color="#8047F8" weight="light" />

              <div>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <div>
              <ButtonComponent type="button" title="Cartão de credito">
                <CreditCard size={16} color="#8047F8" weight="light" />
                Cartão de crédito
              </ButtonComponent>
              <ButtonComponent type="button" title="Cartão de débito">
                <Bank size={16} color="#8047F8" weight="light" />
                cartão de débito
              </ButtonComponent>
              <ButtonComponent type="button" title="Dinheiro">
                <Money size={16} color="#8047F8" weight="light" />
                dinheiro
              </ButtonComponent>
            </div>
          </ContainerPayment>
        </FormCheckoutContainer>

        <ContainerCoffeSelected>
          <h2>Cafés selecionados</h2>

          <WrapperCoffesSelectes>
            <div>
              <CoffeInTheCart />
            </div>

            <FooterCoffeSelected>
              <ul>
                <li>
                  <span>Total de itens</span>
                  <span>
                    {cart.length > 0
                      ? totalValueCoffes.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })
                      : Number(0).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                  </span>
                </li>
                <li>
                  <span>Entrega</span>
                  <span>
                    {delivery.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </li>
                <li>
                  <span>Total</span>
                  <span>
                    {cart.length > 0
                      ? valuefinal.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })
                      : (Number(0) + delivery).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                  </span>
                </li>
              </ul>

              <button type="button" title="Confirmar Pedido">
                Confirmar Pedido
              </button>
            </FooterCoffeSelected>
          </WrapperCoffesSelectes>
        </ContainerCoffeSelected>
      </CheckoutContainer>

      <ToastContainer style={{ zIndex: 1000, fontSize: 16 }} />
    </>
  );
}
