import styled from "styled-components";
import { Contacts } from "../Contacts";
import { Grid } from "../Layout/Grid";
import { Logo } from "../Logo";
import { MenuPanel } from "../MenuPanel";

export const Header = () => {
  return (
    <Wrap temp="0.4fr 1fr 0.5fr">
      <Logo />
      <MenuPanel />
      <Contacts />
    </Wrap>
  );
};

const Wrap = styled(Grid)`
  width: calc(100% - calc(60px * 2));
  padding: 30px 60px;
`;
