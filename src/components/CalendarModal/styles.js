import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34, 34, 34, 0.4);
`

export const ButtonFilter = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: ${({theme}) => theme.primary};
  height: 45px;
  align-items: center;
  justify-content: center;
`

export const ButtonFilterText = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: ${({theme}) => theme.background};
`

export const ModalContent = styled.View`
  flex: 2;
  justify-content: center;
  background-color: ${({theme}) => theme.backgroundVariant};
  padding: 14px;
  
`
