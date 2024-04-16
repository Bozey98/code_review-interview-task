import styled from "styled-components";
import InputText from "./TextInput/TextInput";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const NewMessage = styled.div`
  display: flex;
  align-items: center;
`;

export const NameInput = styled(InputText)`
  flex: 0 0 20%;
  margin-right: 8px;
`;

export const TextInput = styled(InputText)`
  flex: 1 0 70%;
  margin-right: 8px;
`;
