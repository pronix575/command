import styled from "styled-components";

export const Button = styled.div`
  background: var(--main-color);
  padding: 14px 25px;
  color: white;
  border-radius: 8px;
  width: min-content;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;

  box-shadow: 0 8px 16px #0048ff52;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 8px 16px #0048ff86;
  }
`;
