import styled from "styled-components";

export const RegisterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding-right: 5%;
  padding-left: 5%;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: ${({ theme, checked }) => 
    checked ? theme.textPrimary : theme.textSecondary};
  width: 47%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 45px;
  border-radius: 4px;
  border-width: 0.2px;
  border-color: ${({theme}) => theme.background};
  margin-bottom: 14px;
`;

export const RegisterLabel = styled.Text`
  margin-left: 8px;
  font-size: 15px;
`;