import styled from "styled-components";

export const MenuPanel = () => {
  return (
    <Wrap>
      <MenuItem>Услуги</MenuItem>
      <MenuItem>Проекты</MenuItem>
      <MenuItem>Команда</MenuItem>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const MenuItem = styled.div`
  color: var(--main-color);
  font-weight: bold;
  font-size: 20px;
`;
