import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const ContainerPost= styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const ContainerComments = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`

export const InputText = styled.textarea`
  background-color: white;
  color: ${mainColors.principal};
  width: 300px;
  border-radius: 10px;
  border: none;
  height: 100px;
  font-size: 1.2em;
  border: 1px solid ${mainColors.principal};
  padding: 5px;
  :focus {
    outline: 3px solid ${mainColors.principal};
  }
  ::placeholder {
    color: ${mainColors.secundario};
  }
`;