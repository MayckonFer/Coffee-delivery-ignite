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
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "../../components/ButtomComponent";
import { CoffeInTheCart } from "../../components/CoffeInTheCart";
import { InputComponent } from "../../components/InputComponent";
import { AlertError } from "../../components/AlertError";
import { AlertSuccess } from "../../components/AlertSuccess";

import { useCart } from "../../hooks/useCartContext";
import { AddressState, CartState } from "../../interface";

const validationSchema = z.object({
  cep: z.string().min(1).max(8),
  street: z.string().min(1),
  number: z.string().min(1),
  complement: z.string(),
  district: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export function Checkout() {
  const { cart } = useCart() as CartState;
  const { setAddress } = useCart() as AddressState;

  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [methodPayment, setMethodPayment] = useState("");

  const navigate = useNavigate();

  const delivery = 3.5;
  const itensCart = cart.map((item) => {
    return item.price;
  });
  const totalValueCoffes = itensCart.reduce(
    (valor, elemento) => valor + elemento,
    0
  );
  const valuefinal = totalValueCoffes + delivery;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(validationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      district: "",
      city: "",
      state: "",
    },
  });

  function handleSubmitData(data: ValidationSchema) {
    const infoForm = {
      data,
      methodPayment,
    };

    if (cart.length === 0) {
      return AlertError("Você não selecionou nenhum café!");
    }

    if (infoForm.methodPayment === "") {
      return AlertError("Escolha o metodo de pagamento");
    } else {
      AlertSuccess("Pedido feito com sucesso!");
      setAddress(infoForm);

      setTimeout(() => {
        navigate("/success");
      }, 3000);
    }
  }

  useEffect(() => {
    if (cep.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        if (response.data.erro === true) {
          return AlertError("Cep Inválido");
        }

        setState(response.data.uf);
        setCity(response.data.localidade);
        setDistrict(response.data.bairro);
        setStreet(response.data.logradouro);
      });
    }
  }, [cep]);

  return (
    <>
      <main>
        <CheckoutContainer onSubmit={handleSubmit(handleSubmitData)}>
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
                  placeholder="CEP"
                  maxLength={8}
                  {...register("cep")}
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className={errors.cep ? "error" : ""}
                />

                <InputComponent
                  placeholder="Rua"
                  {...register("street")}
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className={errors.street && "error"}
                />

                <div className="footer_wrapperInputs">
                  <InputComponent
                    placeholder="Número"
                    {...register("number")}
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className={errors.number && "error"}
                  />

                  <InputComponent
                    textHelp="Opcional"
                    placeholder="Complemento"
                    {...register("complement")}
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                    className={errors.complement && "error"}
                  />

                  <InputComponent
                    placeholder="Bairro"
                    {...register("district")}
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className={errors.district && "error"}
                  />

                  <InputComponent
                    placeholder="Cidade"
                    {...register("city")}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={errors.city && "error"}
                  />

                  <InputComponent
                    placeholder="UF"
                    {...register("state")}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className={errors.state && "error"}
                  />
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
                <ButtonComponent
                  type="button"
                  title="Cartão de credito"
                  onClick={() => setMethodPayment("cartao-credito")}
                >
                  <CreditCard size={16} color="#8047F8" weight="light" />
                  Cartão de crédito
                </ButtonComponent>
                <ButtonComponent
                  type="button"
                  title="Cartão de débito"
                  onClick={() => setMethodPayment("cartao-debito")}
                >
                  <Bank size={16} color="#8047F8" weight="light" />
                  cartão de débito
                </ButtonComponent>
                <ButtonComponent
                  type="button"
                  title="Dinheiro"
                  onClick={() => setMethodPayment("dinheiro")}
                >
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
      </main>

      <ToastContainer style={{ zIndex: 1000, fontSize: 16 }} />
    </>
  );
}
