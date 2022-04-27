import { FC } from "react";
import styled from "styled-components";
import { Grid } from "../../Layout/Grid";
import { Layout } from "../../Layout/Layout";
import { Space } from "../../Layout/Space/Space";
import img004 from "./assets/004.jpeg";
import img3916 from "./assets/3915-h.jpg";
import app3d from "./assets/b1ff3f9d66ee484045c1207c7e2697dd.jpg";
import anal from "./assets/Degree_CoECS_DataScienceMS_Hero.jpg";
import proto from "./assets/675873de40fe3a783a950900f02f02cd.jpg";
import webImg from "./assets/75970b-650x434.jpg";

const data = [
  {
    image: img004,
    title: "Программно-аппаратные комплексы",
    description:
      "Мы подготовим техническое решение концепции алгоритма работы сложной системы, управление которой осуществляется, как правило, исполнением кода из определённого базового наборакоманд (системы команд), описанных в документации. ",
  },
  {
    image: app3d,
    title: "3D приложения Интерактивных 3D презентаций",
    description:
      "Мы подготовим техническое решение концепции алгоритма работы сложной системы, управление которой осуществляется, как правило, исполнением кода из определённого базового наборакоманд (системы команд), описанных в документации. ",
  },
  {
    image: anal,
    title: "Сбор, обработка, аналитика, визуализация данных",
    description:
      "Мы подготовим техническое решение концепции алгоритма работы сложной системы, управление которой осуществляется, как правило, исполнением кода из определённого базового наборакоманд (системы команд), описанных в документации. ",
  },
  {
    image: webImg,
    title: "Веб сервисы Crypto сервисов (Blockchain и Web3)",
    description:
      "Мы подготовим техническое решение концепции алгоритма работы сложной системы, управление которой осуществляется, как правило, исполнением кода из определённого базового наборакоманд (системы команд), описанных в документации. ",
  },
  {
    image: img3916,
    title: "Программное обеспечение микроконтроллеров STM и ПЛК ",
    description:
      "Мы подготовим техническое решение концепции алгоритма работы сложной системы, управление которой осуществляется, как правило, исполнением кода из определённого базового наборакоманд (системы команд), описанных в документации. ",
  },
  {
    image: proto,
    title: "Разработка прототипов ваших проектов для тестирования идеи",
    description:
      "Разработка продукта с минимальным функционалом для тестирования идеи ",
  },
];

export const HelpPage = () => {
  return (
    <Layout
      fullpage
      style={{ background: "#ECECEC" }}
      title="Чем мы можем помочь Вам?"
    >
      <Grid temp="1fr 1fr 1fr" gap="25px">
        {data.map((elem) => (
          <Card {...elem} />
        ))}
      </Grid>
    </Layout>
  );
};

const Card: FC<{ title: string; description: string; image: string }> = ({
  title,
  description,
  image,
}) => {
  return (
    <CardWrap image={image ? `url(${image})` : "none"}>
      <div style={{ fontWeight: 900, fontSize: 18 }}>{title}</div>
      <Space />
      <div className="description">{description}</div>
    </CardWrap>
  );
};

const CardWrap = styled.div<{ image: string }>`
  height: 220px;
  border-radius: 20px;
  background: white;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;

  padding: 30px;

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: white;
    transform: scale(1.04);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15),
      inset 0 300px 300px rgba(0, 0, 0, 0.55);
    background-image: ${({ image }) => image};

    .description {
      display: none;
    }
  }
`;
