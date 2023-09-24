import styled from "styled-components";
import { fontBaloo } from "../../styles/fontsSize";

export const NotFoundContainer = styled.main`
  text-align: center;

  > p {
    font-size: ${fontBaloo.textL};
    font-weight: 800;
    font-family: var(--font-baloo);
    color: ${({ theme }) => theme["base-title"]};
  }
`;
