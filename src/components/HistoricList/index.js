import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from "styled-components";
import { format } from "date-fns";  

import { 
  Container, 
  Tipo,
  TypeText, 
  IconView,
  DateView,
  DateText,
  DescriptionText,
  ValorText
} from "./styles";

export default function HistoricList({ data }) {
  const theme = useTheme();
  const [isReceive, setIsReceive] = useState(data.type === 'receita');

  const formattedDate = format(new Date(data.created_at), 'dd MMM').toUpperCase();

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return(
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

      <ValorText>RS {data.value}</ValorText>
    </Container>
  );
}
