import styled from "styled-components";

import { fontRoboto, fontBaloo } from "../../styles/fontsSize";

export const ContainerCoffeCard = styled.div`
  width: 100%;
  max-width: 24.6rem;

  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px;
  padding: 2rem 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: -4.5rem;
  }

  h4 {
    font-size: ${fontBaloo.textS};
    font-weight: 700;
    font-family: var(--font-baloo);
    color: ${({ theme }) => theme["base-subtitle"]};
    line-height: 130%;
    margin-top: 1.6rem;
  }

  p {
    font-size: ${fontRoboto.textS};
    font-weight: 400;
    color: ${({ theme }) => theme["base-label"]};
    text-align: center;
    line-height: 130%;
    margin-top: 8px;
  }
`;

export const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 12px;

  span {
    font-size: ${fontRoboto.textSmall};
    font-weight: 700;
    color: ${({ theme }) => theme["yellow-dark"]};
    line-height: 130%;
    text-transform: uppercase;

    background-color: ${({ theme }) => theme["yellow-light"]};
    border-radius: 100px;
    padding: 4px 8px;
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.3rem;

  span {
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: ${fontRoboto.textS};
    font-weight: 400;
    color: ${({ theme }) => theme["base-text"]};
    line-height: 130%;
  }

  span strong {
    font-size: ${fontBaloo.textM};
    font-weight: 800;
    font-family: var(--font-baloo);
    color: ${({ theme }) => theme["base-text"]};
    line-height: 130%;
  }
`;

export const ContainerCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    gap: 6px;

    background-color: ${({ theme }) => theme["base-button"]};
    padding: 8px;
    border-radius: 6px;

    span {
      font-size: ${fontRoboto.textM};
      font-weight: 400;
      color: ${({ theme }) => theme["base-text"]};
      line-height: 130%;
      text-align: center;
    }
  }

  button[title="Adicionar no carrinho"] {
    background-color: ${({ theme }) => theme["purple-dark"]};
    border-radius: 6px;
    padding: 5px;
    transition: 100ms;

    &:hover {
      background-color: ${({ theme }) => theme["purple"]};
    }
  }
`;
