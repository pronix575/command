import styled from "styled-components";
import { Contacts } from "../Contacts";
import { Flex } from "../Layout/Flex";
import { Layout } from "../Layout/Layout";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <Layout>
      <Wrap h="space-between">
        <Logo />
        <Contacts />
      </Wrap>
    </Layout>
  );
};

const Wrap = styled(Flex)`
  width: 100%;
  height: 80px;
`;
