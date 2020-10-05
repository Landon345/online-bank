import styled from "src/styled/styled";

export const DropDownContainer = styled.div<{ open: boolean }>`
  display: block;
  position: absolute;
  z-index: 2;
  height: 35rem;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BackgroundHover};
`;
