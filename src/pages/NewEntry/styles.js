import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`

export const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  background-color: ${({ theme }) => theme.surface};
  font-size: 17px;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 4px;
  opacity: 0.94;
`

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 8px;
  margin-top: 18px;
`

export const SubmitText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.background};
`