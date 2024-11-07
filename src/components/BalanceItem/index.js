import React, { useMemo } from "react";

import { Container, Label, Balance } from "./styles";
import { useTheme } from "styled-components/native";

export default function BalanceItem({ data }) {
  const theme = useTheme();

  const labelName = useMemo(() => {
    if (data.tag === 'saldo') {
      return({
        label: 'Saldo Atual',
        color: theme.primary
      })
    } else if (data.tag === 'receita') {
      return({
        label: 'Entradas de Hoje',
        color: theme.secondaryVariant
      })
    } else {
      return({
        label: 'Saídas de Hoje',
        color: theme.error
      })
    }

  }, [data])

  return(
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance>R$ {data.saldo}</Balance>
    </Container>
  )
}