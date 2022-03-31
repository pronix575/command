import { FC, ReactElement, useState } from "react";
import styled from "styled-components";
import { Flex } from "../../Layout/Flex";
import { Layout } from "../../Layout/Layout";
import crypto2cardbotImage from "./assets/B2cbot.png";
import kamaztrainerImage from "./assets/Kamaz.jpg";
import nftboxesImage from "./assets/Exilon.png";
import nykelsintethImage from "./assets/Nickel.jpg";
import quantummemoryImage from "./assets/Memory.png";
import { Space } from "../../Layout/Space/Space";

interface Project {
  name: string;
  link?: string;
  description: string;
  image: string;
}

const data: Project[] = [
  {
    name: "Синтез никеля",
    description:
      "Аннотация: команда провела цикл научных исследований, в ходе которых был освоен синтез никелевых наноструктур с огромной удельной площадью и собран щелочной аккумулятор, выдерживающий сверхвысокие токи. 1. Отработана методика синтеза никелевого наноструктурированного микроволокна на базе лаборатории химических источников тока; 2. Разработана методика внесения никелевых микроволокон в токовые коллекторы электродов щелочных аккумуляторов; 3. Отработа методика внесения на электроды активной массы механическим, химическим и электрохимическим методами; 4. Получен электрод, допускающий цикл заряда-разряда сверхвысокими токами (80C).",
    image: nykelsintethImage,
  },
  {
    name: "Автотренажер KAMAZ",
    description:
      "Тренажеры «Автотренер» помогают проводить предварительное обучение перед вождением реального автомобиля. Автоматизируют рутинную деятельность инструктора. Снижают риск дорогой поломки реального автомобиля в первые часы вождения. Помогают эффективно распределить время обучения вождению. Обеспечивают экономию на ГСМ, налоге на двигатель, страховке, зарплате инструктора, ремонте автомобиля, аренде автодрома.",
    image: kamaztrainerImage,
  },
  {
    name: "NFTboxes",
    link: "https://exilon.io/",
    description:
      "NFTboxes marketplace - это уникальный сервис, где можно создавать, крафтить, хранить, покупать и продавать NFT, лутбоксы и супербоксы из различных проектов. Он разработан для игр и частных лиц, для собственных маркетинговых целей проекта в рамках партнерских отношений, альянсов или рекламных акций. ",
    image: nftboxesImage,
  },
  {
    name: "Квантовая память",
    description:
      "Микроволновая квантовая память это устройство для удержания электромагнитного микроволнового импульса ослабленного до уровня энергии одного фотона. в Казанском Квантовом Центре проведен технологический менеджмент: разработан патент на изобретение. разработано техническое задание на создание прибора квантовых коммуникаций.",
    image: quantummemoryImage,
  },
  {
    name: "Crypt2Card_bot",
    link: "https://crypt2card.ru/",
    description:
      "Разработана автоматизированная система контроля курса криптовалют, их обмена и вывода валют на карту.",
    image: crypto2cardbotImage,
  },
];

export const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <Layout fullpage title="Проекты">
      <Flex h="space-between">
        {data.map((elem, index) => (
          <MiniCard
            project={elem}
            selected={index === selectedProject}
            onClick={() => setSelectedProject(index)}
          />
        ))}
      </Flex>
    </Layout>
  );
};

const MiniCard: FC<{
  project: Project;
  selected: boolean;
  onClick(): void;
}> = ({ project: { name, image }, selected, onClick }) => {
  return (
    <ProjectMiniCard selected={selected} onClick={onClick}>
      <Image src={image} />
      <Space h={30} />
      <div style={{ fontWeight: "bold" }}>{name}</div>
    </ProjectMiniCard>
  );
};

const Image = styled.div<{ src: string }>`
  width: 110px;
  height: 110px;
  background-size: 100%;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url(${({ src }) => src});
  position: absolute;
  top: -55px;
`;

const ProjectMiniCard = styled(Flex)<{ selected: boolean }>`
  cursor: pointer;
  position: relative;
  margin-top: 55px;
  padding: 20px;
  width: 180px;
  height: 70px;
  background: white;
  border-radius: 20px;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 20px;
  transition: 0.2s;

  border: ${({ selected }) =>
    `2px solid ${selected ? "var(--main-color)" : "white"}`};

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;
