import styled from "styled-components";

export const Flex = styled.div<{
  h?: "center" | "space-between" | "space-around" | "flex-end" | "flex-start";
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ h }) => h};
`;
