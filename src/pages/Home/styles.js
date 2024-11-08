import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`

export const ListBalance = styled.FlatList`
  max-height: 190px;
  margin-top: 20px;
`
export const Area = styled.View`
  background-color: ${({theme}) => theme.backgroundVariant};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex-direction: row;
  padding-left: 14px;
  padding-right: 14px;
  align-items: baseline;
  margin-top: 24px;
  padding-top: 14px;
`

export const Title = styled.Text`
  margin-left: 5px;
  color: ${({theme}) => theme.surface};
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 18px;
`

export const List = styled.FlatList`
  flex: 1;
  background-color: ${({theme}) => theme. backgroundVariant}
`