import styled from "styled-components";

export const Flex = styled.div<{
  h?: "center" | "space-between" | "space-around" | "flex-end" | "flex-start";
  v?: "center";
}>`
  display: flex;
  align-items: ${({ v = "center" }) => v};
  justify-content: ${({ h }) => h};
`;
