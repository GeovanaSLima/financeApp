import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #121212;
  align-items: center;
`

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px;
  color: ${({theme}) => theme.textPrimary};
`

export const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding: 0 14px;
  color: ${({theme}) => theme.textPrimary};
`

export const NewLink = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  margin-top: 12px;
  align-items: center;
  justify-content: center;
`

export const NewText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.background};
`

export const LogoutButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #C62C36;
`

export const LogoutText = styled.Text`
  color: #C62C36;
  font-size: 18px;
`
