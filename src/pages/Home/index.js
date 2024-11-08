import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from "date-fns";
import { useTheme } from "styled-components";
import { useIsFocused } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import api from "../../services/api";
import Header from "../../components/Header";
import BalanceItem from "../../components/BalanceItem";
import HistoricList from "../../components/HistoricList";

import { 
  Background,
  ListBalance,
  Area, 
  Title,
  List
} from "./styles";

export default function Home() {
  const theme = useTheme();

  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let dateFormatted = format(dateMovements, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params: {
          date: dateFormatted
        }
      })

      const balance = await api.get('/balance', {
        params: {
          date: dateFormatted
        }
      })

      if (isActive) {
        setMovements(receives.data);
        setListBalance(balance.data);
        console.log(receives.data)
      }

    }

    getMovements();

    return () => isActive = false;

  }, [isFocused])

  async function handleDelete(id) {
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: id
        }
      })


    } catch(error) {
      console.log(error);
    }
  }

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

      <Area>
        <TouchableOpacity>
          <Icon name="event" color={theme.surface} size={30} />
        </TouchableOpacity>
        <Title>Últimas Movimentações</Title>
      </Area>

      <List 
        data={movements}
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => <HistoricList data={item} deleteItem={handleDelete} /> }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Background>
  )
}