import React, { createContext, useState } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    nome: 'Geovana'
  });

  const navigation = useNavigation();

  async function signUp(email, password, name) {
    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password
      })

      navigation.goBack();
      
    } catch(error) {
      console.log("[ERROR] - Error on signing up user")
    }
  }

  return(
    <AuthContext.Provider value={{ user, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;