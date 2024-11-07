import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { format } from "date-fns";

import { Background } from "./styles";
import Header from "../../components/Header";
import api from "../../services/api";

export default function Home() {
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

  }, [])

  return(
    <Background>
      <Header title="Minhas Movimentações" />
    </Background>
  )
}