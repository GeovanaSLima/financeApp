import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from "styled-components/native";

import { Container, Title, ButtonMenu } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  const theme = useTheme();
  const navigation = useNavigation();

  return(
    <Container>
      <ButtonMenu onPress={ () => navigation.openDrawer() }>
        <Icon name="menu" size={30} color={theme.textPrimary} />
      </ButtonMenu>

      { title && (
        <Title>
          {title}
        </Title>
      )}
    </Container>
  )
}