import styled from "styled-components";
import { fontRoboto } from "../../styles/fontsSize";

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme["base-input"]};
  border: 1px solid ${({ theme }) => theme["base-button"]};
  border-radius: 4px;
  color: ${({ theme }) => theme["base-label"]};
  line-height: 0;

  &:active {
    border: 1px solid ${({ theme }) => theme["purple"]};
  }

  > input {
    height: 4.8rem;
    width: 100%;

    padding: 1.2rem;

    color: ${({ theme }) => theme["base-subtitle"]};
    background: transparent;
    border-radius: 4px;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme["base-label"]};
    }
  }

  small {
    font-size: ${fontRoboto.textXS};
    font-weight: 400;
    font-style: italic;
    margin-right: 1.2rem;
  }
`;
