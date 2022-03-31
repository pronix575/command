import { FC } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";

interface Props {
  fullpage?: boolean;
  style?: React.CSSProperties;
  title?: string;
}

export const Layout: FC<Props> = ({ children, fullpage, style, title }) => {
  return (
    <Flex
      h="center"
      style={{
        height: fullpage ? "100vh" : void 0,
        maxHeight: 1080,
        ...(style || {}),
      }}
    >
      <Wrap>
        {title && <Title>{title}</Title>}
        {children}
      </Wrap>
    </Flex>
  );
};

const Wrap = styled.div`
  padding: 0 30px;
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.div`
  color: var(--main-color);
  font-size: 35px;
  font-weight: 900;
  margin-bottom: 30px;
`;
