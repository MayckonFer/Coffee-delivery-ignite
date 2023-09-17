import styled from "styled-components";
import { fontRoboto } from "../../styles/fontsSize";

export const ContainerButton = styled.button`
  background-color: ${({ theme }) => theme["base-button"]};
  border-radius: 6px;
  padding: 1rem;
  width: 100%;

  font-size: ${fontRoboto.textS};
  font-weight: 400;
  color: ${({ theme }) => theme["base-text"]};
  line-height: 160%;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  transition: 100ms;

  &:hover {
    background-color: ${({ theme }) => theme["base-hover"]};
  }

  &:focus {
    box-shadow: none;
    background-color: ${({ theme }) => theme["purple-light"]};
    border: 1px solid ${({ theme }) => theme["purple"]};
  }
`;
