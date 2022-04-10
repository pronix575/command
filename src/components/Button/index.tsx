import styled from "styled-components";

export const Button = styled.div`
  border: 3px solid var(--main-color);
  padding: 14px 30px;
  color: black;
  border-radius: 80px;
  font-size: 18px;
  font-weight: bold;
  width: min-content;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;

  box-shadow: 0 8px 16px #0048ff52;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 8px 16px #0048ff86;
  }

  &:active {
    box-shadow: none;
    opacity: 1;
    transform: translateY(2px);
  }
`;
