import styled from "styled-components";
import { fontRoboto } from "../../styles/fontsSize";

export const ContainerCoffeInTheCart = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme["base-button"]};
  padding-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: 450px) {
    align-items: flex-start;
    flex-direction: row;
  }

  img {
    width: 6.4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  > div span {
    font-size: ${fontRoboto.textM};
    font-weight: 400;
    color: ${({ theme }) => theme["base-subtitle"]};
    line-height: 130%;
  }

  > div div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  > div div div {
    background-color: ${({ theme }) => theme["base-button"]};
    border-radius: 6px;
    padding: 8px;
  }

  p {
    font-size: ${fontRoboto.textM};
    font-weight: 700;
    font-family: var(--font-baloo);
    color: ${({ theme }) => theme["base-text"]};
    line-height: 130%;
  }
`;

export const MessageNotCoffe = styled.span`
  font-size: ${fontRoboto.textL};
  font-weight: 700;
  color: ${({ theme }) => theme["base-text"]};
  line-height: 130%;
`;
