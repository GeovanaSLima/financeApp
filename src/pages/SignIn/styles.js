import styled from "styled-components";

export const Background = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 56px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.surface};
  opacity: 0.84;
  width:90%;
  font-size: 17px;
  padding: 12px;
  border-radius: 8px; 
  color: ${({ theme }) => theme.background}; 
  margin-bottom: 12px;
  height: 60;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  margin-top: 12px;
  align-items: center;
  justify-content: center;
`

export const SubmitText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.background};
`

export const Link = styled.TouchableOpacity`
  margin: 10px 0px;
`

export const LinkText = styled.Text`
  color: ${({ theme }) => theme.textSecondary}
`