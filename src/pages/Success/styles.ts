import styled from "styled-components";
import { fontBaloo, fontRoboto } from "../../styles/fontsSize";

export const ContainerSuccessMain = styled.main`
  margin-top: 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ConfirmOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  header h2 {
    font-size: ${fontBaloo.textL};
    font-weight: 800;
    color: ${({ theme }) => theme["yellow-dark"]};
    line-height: 130%;
  }

  header p {
    font-size: ${fontRoboto.textL};
    font-weight: 400;
    color: ${({ theme }) => theme["base-subtitle"]};
    line-height: 130%;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.2rem;

    width: 100%;
    max-width: 52.6rem;

    background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(45deg, #dbac2c, #8047f8) border-box;
    border: 1px solid transparent;
    border-radius: 6px 36px;
    padding: 2rem;

    @media (min-width: 768px) {
      padding: 4rem;
    }
  }

  ul li span {
    line-height: 0;
    border-radius: 50%;
    padding: 8px;
  }

  ul li:nth-child(1) span {
    background-color: ${({ theme }) => theme["purple"]};
  }

  ul li:nth-child(2) span {
    background-color: ${({ theme }) => theme["yellow"]};
  }

  ul li:nth-child(3) span {
    background-color: ${({ theme }) => theme["yellow-dark"]};
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: ${fontRoboto.textM};
    font-weight: 400;
    color: ${({ theme }) => theme["base-text"]};
    line-height: 130%;
  }
`;
