import { ReactElement } from "react";
import { Flex } from "../../Layout/Flex";
import { Layout } from "../../Layout/Layout";
import { Space } from "../../Layout/Space/Space";
import { BrainIcon, ExilonIcon, KamazIcon, KazanExpressIcon } from "./icons";

interface Company {
  img: ReactElement;
  name: string;
}

const data: Company[] = [
  {
    img: <KamazIcon />,
    name: "Kamaz",
  },
  {
    img: <ExilonIcon />,
    name: "Exilon",
  },
  {
    img: <KazanExpressIcon />,
    name: "KazanExpress",
  },
  {
    img: <BrainIcon />,
    name: "Since Research",
  },
];

const renderCompany = ({ img, name }: Company) => {
  return (
    <Flex style={{ flexDirection: "column", height: "200px" }}>
      {img}
      <Space h={40} />
      <div style={{ color: "#CECECE", fontSize: "30px", fontWeight: 600 }}>
        {name}
      </div>
    </Flex>
  );
};

export const WorkWithUsPage = () => {
  return (
    <Layout
      title="С нами работают"
      style={{ padding: "80px 0px", background: "white" }}
    >
      <Space h={40} />
      <Flex h="space-between">{data.map(renderCompany)}</Flex>
    </Layout>
  );
};
