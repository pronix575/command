import styled from "styled-components";

interface Props {
  temp?: string;
  gap?: string;
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ temp }) => temp};
  grid-gap: ${({ gap }) => gap};
`;
