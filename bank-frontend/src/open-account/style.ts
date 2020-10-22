import styled from "src/styled/styled";

export const RadioInput = styled.input`
  width: 21px;
  cursor: pointer;
  margin: 0px 10px;
  height: 21px;
`;
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 10px;
`;
export const CheckBoxInput = styled.input`
  width: 21px;
  cursor: pointer;
  margin: 0px 10px;
  height: 21px;
`;
export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 10px;
`;

export const TextInput = styled.input`
  padding: 10px;
  margin: 10px 10px;
  width: 80%;
`;
export const TextLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 18px;

  padding: 10px;
`;
export const ContinueButton = styled.button`
  margin: 20px;
  background-color: #99ccff;
  color: black;
  cursor: pointer;
  font-size: 20px;
  padding: 5px 15px;
  border: none;
  :hover {
    background-color: #2bf;
  }
`;
export const RemoveButton = styled.button`
  margin: 5px;
  background-color: tomato;
  color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 2px 7px;
  border: none;
  :hover {
    background-color: red;
  }
`;

export const SectionTitle = styled.div`
  font-size: 20px;
  padding-top: 25px;
  padding-bottom: 5px;
`;
