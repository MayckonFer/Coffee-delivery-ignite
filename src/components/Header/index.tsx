import { HeaderContainer } from "./styles";

import { MapPin } from "@phosphor-icons/react";
import { ShoppingCart } from "@phosphor-icons/react";

import imgLogo from "/assets/images/logo.svg";
import { useCart } from "../../hooks/useCartContext";

import { CartState } from "../../interface";

import { useNavigate } from "react-router-dom";

export function Header() {
  const { cart } = useCart() as CartState;
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <img
        src={imgLogo}
        alt="Logo Coffe Delivery"
        onClick={() => navigate("/")}
      />

      <div>
        <button type="button" title="Sua localização">
          <MapPin size={22} color="#8047F8" weight="fill" />

          <span>Porto Alegre, RS</span>
        </button>
        <button
          type="button"
          title="Carrinho"
          onClick={() => navigate("/checkout")}
        >
          <ShoppingCart size={20} color="#C47F17" weight="fill" />

          <span>{cart.length > 0 ? cart.length : 0}</span>
        </button>
      </div>
    </HeaderContainer>
  );
}
