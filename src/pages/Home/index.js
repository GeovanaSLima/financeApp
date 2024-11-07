import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";

import api from "../../services/api";
import Header from "../../components/Header";
import BalanceItem from "../../components/BalanceItem";

import { 
  Background,
  ListBalance
} from "./styles";

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let dateFormatted = format(dateMovements, 'dd/MM/yyyy');

      const balance = await api.get('/balance', {
        params: {
          date: dateFormatted
        }
      })

      if (isActive) {
        setListBalance(balance.data);
      }

    }

    getMovements();

    return () => isActive = false;

  }, [isFocused])

  return(
    <Background>
      <Header title="Minhas Movimentações" />

      <ListBalance 
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => item.tag }
        renderItem={ ({ item }) => ( <BalanceItem data={item} /> )}
      />
    </Background>
  )
}