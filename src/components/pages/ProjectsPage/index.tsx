import { FC, ReactElement } from "react";
import styled from "styled-components";
import { Flex } from "../../Layout/Flex";
import { Layout } from "../../Layout/Layout";
import {
  Crypto2cardbotIcon,
  KamaztrainerIcon,
  NftboxesIcon,
  NykelsintethIcon,
  QuantummemoryIcon,
} from "./icons";

interface Project {
  name: string;
  link?: string;
  description: string;
  icon: ReactElement;
}

const data: Project[] = [
  {
    name: "Синтез никеля",
    description:
      "Аннотация: команда провела цикл научных исследований, в ходе которых был освоен синтез никелевых наноструктур с огромной удельной площадью и собран щелочной аккумулятор, выдерживающий сверхвысокие токи. 1. Отработана методика синтеза никелевого наноструктурированного микроволокна на базе лаборатории химических источников тока; 2. Разработана методика внесения никелевых микроволокон в токовые коллекторы электродов щелочных аккумуляторов; 3. Отработа методика внесения на электроды активной массы механическим, химическим и электрохимическим методами; 4. Получен электрод, допускающий цикл заряда-разряда сверхвысокими токами (80C).",
    icon: <NykelsintethIcon />,
  },
  {
    name: "Автотренажер KAMAZ",
    description:
      "Тренажеры «Автотренер» помогают проводить предварительное обучение перед вождением реального автомобиля. Автоматизируют рутинную деятельность инструктора. Снижают риск дорогой поломки реального автомобиля в первые часы вождения. Помогают эффективно распределить время обучения вождению. Обеспечивают экономию на ГСМ, налоге на двигатель, страховке, зарплате инструктора, ремонте автомобиля, аренде автодрома.",
    icon: <KamaztrainerIcon />,
  },
  {
    name: "NFTboxes",
    link: "https://exilon.io/",
    description:
      "NFTboxes marketplace - это уникальный сервис, где можно создавать, крафтить, хранить, покупать и продавать NFT, лутбоксы и супербоксы из различных проектов. Он разработан для игр и частных лиц, для собственных маркетинговых целей проекта в рамках партнерских отношений, альянсов или рекламных акций. ",
    icon: <NftboxesIcon />,
  },
  {
    name: "Квантовая память",
    description:
      "Микроволновая квантовая память это устройство для удержания электромагнитного микроволнового импульса ослабленного до уровня энергии одного фотона. в Казанском Квантовом Центре проведен технологический менеджмент: разработан патент на изобретение. разработано техническое задание на создание прибора квантовых коммуникаций.",
    icon: <QuantummemoryIcon />,
  },
  {
    name: "Crypt2Card_bot",
    link: "https://crypt2card.ru/",
    description:
      "Разработана автоматизированная система контроля курса криптовалют, их обмена и вывода валют на карту.",
    icon: <Crypto2cardbotIcon />,
  },
];

export const ProjectsPage = () => {
  return (
    <Layout fullpage title="Проекты">
      <Flex h="space-between">
        {data.map((elem) => (
          <MiniCard project={elem} />
        ))}
      </Flex>
    </Layout>
  );
};

const MiniCard: FC<{ project: Project }> = ({ project: { name, icon } }) => {
  return (
    <ProjectMiniCard>
      <div style={{ height: 60 }}>{icon}</div>
      <div>{name}</div>
    </ProjectMiniCard>
  );
};

const ProjectMiniCard = styled(Flex)`
  width: 220px;
  height: 190px;
  background: white;
  border-radius: 20px;
  justify-content: center;
  flex-direction: column;
`;
