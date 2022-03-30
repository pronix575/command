import styled from "styled-components";
import { Button } from "../../Button";
import { Layout } from "../../Layout/Layout";
import { Space } from "../../Layout/Space/Space";
import { ReactComponent as WaveIcon } from "./assets/wave.svg";

export const PreviewPage = () => {
  return (
    <Layout fullpage style={{ marginTop: -80 }}>
      <Wrap>
        <WaveIcon />
        <Space h={30} />
        <Title>Профессиональная команда разработчиков. </Title>
        <Space />
        <Description>
          Разрабатываем интересные, смелые проекты, состоящие из дизайна,
          программного обеспечения, 3D-графики, электроники и инженерии.
        </Description>
        <Space h={40} />
        <Button>Заказать звонок</Button>
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  background: white;
  border-radius: 44px;
  padding: 35px;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 28px;
`;

const Description = styled.div`
  font-size: 18px;
`;
