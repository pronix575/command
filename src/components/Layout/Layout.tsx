import { FC } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";

interface Props {
  fullpage?: boolean;
  style?: React.CSSProperties;
}

export const Layout: FC<Props> = ({ children, fullpage, style }) => {
  return (
    <Flex
      h="center"
      style={{ height: fullpage ? "100vh" : void 0, ...(style || {}) }}
    >
      <Wrap>{children}</Wrap>
    </Flex>
  );
};

const Wrap = styled.div`
  padding: 0 30px;
  width: 100%;
  max-width: 1200px;
`;
