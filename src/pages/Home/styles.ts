import styled from "styled-components";

import { fontRoboto, fontBaloo } from "../../styles/fontsSize";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-top: 2.2rem;
  margin-bottom: 2.2rem;

  @media (min-width: 768px) {
    margin-top: 4.2rem;
  }
`;

export const AboutCoffeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5rem;

    @media (min-width: 992px) {
      margin: 0;
      max-width: 60rem;
    }

    h1 {
      font-size: ${fontBaloo.textL};
      font-weight: 800;
      font-family: var(--font-baloo);
      color: ${({ theme }) => theme["base-title"]};
      line-height: 130%;

      @media (min-width: 768px) {
        font-size: ${fontBaloo.textXL};
      }
    }

    p {
      font-size: ${fontRoboto.textM};
      font-weight: 400;
      color: ${({ theme }) => theme["base-title"]};
      line-height: 130%;
      margin-top: 1.6rem;

      @media (min-width: 768px) {
        font-size: ${fontRoboto.textL};
      }
    }

    ul {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;

      margin-top: 4.1rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem 1rem;
        align-items: flex-start;
      }

      @media (min-width: 992px) {
        margin-top: 7.1rem;
      }
    }

    ul li span {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    ul li:nth-child(1) span {
      background-color: ${({ theme }) => theme["yellow-dark"]};
    }
    ul li:nth-child(2) span {
      background-color: ${({ theme }) => theme["base-text"]};
    }
    ul li:nth-child(3) span {
      background-color: ${({ theme }) => theme["yellow"]};
    }
    ul li:nth-child(4) span {
      background-color: ${({ theme }) => theme["purple"]};
    }

    ul li {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      font-size: ${fontRoboto.textS};
      font-weight: 400;
      color: ${({ theme }) => theme["base-text"]};
      line-height: 130%;

      @media (min-width: 768px) {
        font-size: ${fontRoboto.textM};
      }
    }
  }
`;

export const CoffesContainer = styled.section`
  margin-top: 6.1rem;

  @media (min-width: 768px) {
    margin-top: 9.1rem;
  }

  h2 {
    font-size: ${fontBaloo.textL};
    font-weight: 800;
    font-family: var(--font-baloo);
    color: ${({ theme }) => theme["base-subtitle"]};
    line-height: 130%;
  }

  > div {
    margin-top: 5.4rem;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;
    gap: 4rem 3.2rem;

    @media (min-width: 595px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
