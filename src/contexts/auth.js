import React, { createContext, useState } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoandingAuth] = useState(false);

  const navigation = useNavigation();

  async function signUp(email, password, name) {
    setLoandingAuth(true);

    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password
      })

      setLoandingAuth(false);

      navigation.goBack();
      
    } catch(error) {
      console.log("[ERROR] - Error on signing up user")
      setLoandingAuth(false);
    }
  }

  return(
    <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;