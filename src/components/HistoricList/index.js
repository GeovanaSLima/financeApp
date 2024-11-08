import React, { useState } from "react";

import Icon from 'react-native-vector-icons/Feather';

import { format } from "date-fns";  
import { useTheme } from "styled-components";
import { TouchableWithoutFeedback, Alert } from "react-native";

import { 
  Container, 
  Tipo,
  TypeText, 
  IconView,
  DateText,
  DescriptionText,
  ValorText
} from "./styles";

export default function HistoricList({ data, deleteItem }) {
  const theme = useTheme();
  const [isReceive, setIsReceive] = useState(data.type === 'receita');

  const formattedDate = format(new Date(data.created_at), 'dd MMM').toUpperCase();

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleDeleteItem() {
    Alert.alert(
      'Atenção',
      'Tem certeza que quer deleter essa movimentação?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Deletar',
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }

  return(
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Tipo>
          <IconView tipo={isReceive}>
            <Icon 
              name={ isReceive ? "arrow-up" : "arrow-down" } 
              size={20} 
              color={theme.background} 
            />
            <TypeText>{data.type}</TypeText>
          </IconView>
          
          <DateText>{formattedDate}</DateText>

        </Tipo>

        <DescriptionText>{capitalize(data.description)}</DescriptionText>

        <ValorText>R$ {data.value}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}
