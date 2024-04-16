import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 16px 0px;
`;

export const Name = styled.div`
  font-weight: bold;
  flex: 0 0 10%;
`;

export const Text = styled.div`
  font-weight: normal;
  flex: 0 0 60%;
`;

export const Date = styled.div`
  font-weight: normal;
  font-style: italic;
  flex: 0 0 30%;
`;
