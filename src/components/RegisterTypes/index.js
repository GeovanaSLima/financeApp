import React, { useState } from "react";
import Feather from 'react-native-vector-icons/Feather'
import { useTheme } from "styled-components";

import { 
  RegisterContainer,
  RegisterButton,
  RegisterLabel
} from "./styles";

export default function RegisterTypes({ type, sendTypeChanged }) {
  const theme = useTheme();
  const [typeChecked, setTypeChecked] = useState(type);

  function changeType(name) {
    if (name === 'receita') {
      setTypeChecked('receita');
      sendTypeChanged('receita');
    } else {
      setTypeChecked('despesa');
      sendTypeChanged('despesa');
    }
  }
  
  return(
    <RegisterContainer>
      <RegisterButton 
        checked={ typeChecked === 'receita' } 
        onPress={ () => changeType('receita')}
      >
        <Feather name="arrow-up" size={25} color={theme.background} />
        <RegisterLabel>Receita</RegisterLabel>
      </RegisterButton>
      
      <RegisterButton 
        checked={ typeChecked === 'despesa' } 
        onPress={ () => changeType('despesa')}
      >
        <Feather name="arrow-down" size={25} color={theme.background} />
        <RegisterLabel>Despesa</RegisterLabel>
      </RegisterButton>

    </RegisterContainer>
  )
}