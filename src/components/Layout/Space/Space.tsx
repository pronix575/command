import React, { ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "../Flex";

interface Props {
  w?: number;
  h?: number;
  line?: boolean;
}

export const Space = styled.div<Props>`
  min-width: ${({ w }: Props) => `${w || 15}px`};
  min-height: ${({ h, line }: Props) => `${(h || 15) * (line ? 2 : 1)}px`};
`;

export const SpaceLine = ({ noTop, h }: { noTop?: boolean; h?: number }) => (
  <>
    {!noTop && <Space h={h} />}
    <Line />
    <Space h={h} />
  </>
);

const Line = styled.div`
  border-top: 1px solid lightgray;
`;

interface SpaceProps {
  children: ReactNode[];
  flex?: boolean;
  spaceStyles?: React.CSSProperties;
}

export const Spaces: React.FC<SpaceProps> = ({
  children,
  flex,
  spaceStyles,
}) => {
  const content = children.filter(Boolean).map((elem, index) => (
    <React.Fragment key={index}>
      {elem}
      {index !== children.length - 1 && <Space style={spaceStyles} />}
    </React.Fragment>
  ));

  return <>{flex ? <Flex>{content}</Flex> : content}</>;
};
