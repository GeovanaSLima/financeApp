import React, { useState } from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";

import Header from "../../components/Header";
import RegisterTypes from "../../components/RegisterTypes";

import { 
  Background,
  Input,
  SubmitButton,
  SubmitText 
} from "./styles";

export default function NewEntry() {
  const [labelInput, setLabelInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState('receita');

  return(
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <Background>
        <Header title="Cadastrar Nova Movimentação" />

        <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }} >

          <Input 
            placeholder="Descrição do Registro"
            value={labelInput}
            onChangeText={ (text) => setLabelInput(text) }
          />
          
          <Input 
            placeholder="Valor Desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={ (text) => setValueInput(text) }
          />

          <RegisterTypes type={type} sendTypeChanged={ (item) => setType(item) } />

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>



        </SafeAreaView>

      </Background>
    </TouchableWithoutFeedback>
  )
}