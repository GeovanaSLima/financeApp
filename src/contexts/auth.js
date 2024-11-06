import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

import { AsyncStorage } from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoandingAuth] = useState(false);
  const [loading, setLoanding] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@finToken');

      if (storageUser) {
        const response = await api.get('/me', {
          headers: {
            'Authorization': `Bearer ${storageUser}`
          }
        })
        .catch(() => {
          setUser(null);
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        
        setUser(response.data);

        setLoanding(false);

      }

      setLoanding(false);

    }

    loadStorage();
  }, [])

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
      console.log("[ERROR] - Error on signing up user", error)
      setLoandingAuth(false);
    }
  }

  async function signIn(email, password) {
    setLoandingAuth(true);

    try {
      const response = await api.post("/login", {
        email: email,
        password: password
      })

      const { id, name, token } = response.data;

      const data = {
        id,
        name,
        token,
        email,
      };

      await AsyncStorage.setItem('@finToken', token)

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
      })

      setLoandingAuth(false);

    } catch(error) {
      console.log("[ERROR] - Error on signing in", error)
      setLoandingAuth(false);
    }
  }

  return(
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;