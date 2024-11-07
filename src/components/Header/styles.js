import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 15px;
  margin-bottom: 15px;
  width: 100%;
  max-height: 60px;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin-left: 12px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 600;
`;

export const ButtonMenu = styled.TouchableOpacity`

`;