/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

import { InputComponent } from "../../components/InputComponent";
import { ButtonComponent } from "../../components/ButtomComponent";
import { CoffeInTheCart } from "../../components/CoffeInTheCart";

import { useCart } from "../../hooks/useCartContext";
import { CartState } from "../../interface";

const schemaForm = z.object({
  cep: z.string().min(1, "Por favor, informe um CEP válido!"),
  street: z.string().nonempty("Por favor, informe uma rua válida!"),
  number: z.string().nonempty("Por favor, informe um número válido!"),
  city: z.string().nonempty("Por favor, informe uma cidade válida!"),
  state: z.string().nonempty("Por favor, informe um estado válido!"),
  complement: z.string(),
  district: z.string().min(1, "Por favor, informe um bairro válido!"),
});

type FormProps = z.infer<typeof schemaForm>;

export function Checkout() {
  const { cart } = useCart() as CartState;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schemaForm),
  });

  const delivery = 3.5;

  const itensCart = cart.map((item) => {
    return item.price;
  });

  const totalValueCoffes = itensCart.reduce(
    (valor, elemento) => valor + elemento,
    0
  );

  const valuefinal = totalValueCoffes + delivery;

  function handleValidationForm(data: FormProps) {
    console.log(data);
  }

  return (
    <>
      <CheckoutContainer onSubmit={handleSubmit(handleValidationForm)}>
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
                placeholder="CEP"
                maxLength={8}
                {...register("cep")}
              />
              {errors.cep && <span>{errors?.cep?.message}</span>}

              <InputComponent
                type="text"
                placeholder="Rua"
                {...register("street")}
              />
              {errors.street && <span>{errors.street.message}</span>}
              <div className="footer_wrapperInputs">
                <InputComponent
                  type="text"
                  placeholder="Número"
                  {...register("number")}
                />
                {errors.number && <span>{errors.number.message}</span>}
                <InputComponent
                  type="text"
                  placeholder="Complemento"
                  text="Opcional"
                  {...register("complement")}
                />
                <InputComponent
                  type="text"
                  placeholder="Bairro"
                  {...register("district")}
                />
                {errors.district && <span>{errors.district.message}</span>}
                <InputComponent
                  type="city"
                  placeholder="Cidade"
                  {...register("city")}
                />
                {errors.city && <span>{errors.city.message}</span>}
                <InputComponent
                  type="text"
                  placeholder="UF"
                  {...register("state")}
                />
                {errors.state && <span>{errors.state.message}</span>}
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

              <button type="submit" title="Confirmar Pedido">
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
