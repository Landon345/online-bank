import styled from "src/styled/styled";

export const DropDownButton = styled.button`
  padding: 5px 15px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ButtonText};
  outline: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border: none;
  background-color: ${({ theme }) => theme.colors.Button};
  :hover {
    background-color: ${({ theme }) => theme.colors.ButtonHover};
  }
`;

export const OpenAccountButton = styled.button`
  padding: 5px 15px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ButtonText2};
  outline: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border: none;
  background-color: ${({ theme }) => theme.colors.Button2};
`;
