import styled from "src/styled/styled";

export const DropDownContainer = styled.div<{ open: boolean }>`
  display: block;
  position: absolute;
  line-height: 1.5;
  height: 45rem;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BackgroundHover};
`;
