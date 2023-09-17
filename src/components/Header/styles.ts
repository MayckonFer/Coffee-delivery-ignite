import styled from "styled-components";

import { fontRoboto } from "../../styles/fontsSize";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.6rem 0;

  @media (min-width: 425px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 3.2rem 0;
  }

  img {
    cursor: pointer;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button[title="Sua localização"] {
      display: flex;
      align-items: center;
      gap: 4px;

      background-color: ${({ theme }) => theme["purple-light"]};
      border-radius: 6px;
      padding: 8px;

      span {
        font-size: ${fontRoboto.textS};
        font-weight: 400;
        color: ${({ theme }) => theme["purple-dark"]};
        line-height: 130%;
      }
    }

    button[title="Carrinho"] {
      background-color: ${({ theme }) => theme["yellow-light"]};
      border-radius: 6px;
      padding: 8px;
      position: relative;

      span {
        position: absolute;
        top: -1rem;
        right: -1rem;

        background-color: ${({ theme }) => theme["yellow-dark"]};
        border-radius: 50%;
        padding: 3px 6px;

        font-size: ${fontRoboto.textXS};
        font-weight: 700;
        color: ${({ theme }) => theme["white"]};
      }
    }
  }
`;
