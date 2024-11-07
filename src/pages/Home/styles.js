import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`

export const ListBalance = styled.FlatList`
  max-height: 190px;
  margin-top: 20px;
`