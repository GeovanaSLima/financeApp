import React, { useContext } from "react";
import { View, Text, Image, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useTheme } from "styled-components";
import { AuthContext } from "../../contexts/auth";

export default function Sidebar(props) {
  const theme = useTheme();
  const { user }  = useContext(AuthContext)

  return(
    <DrawerContentScrollView {...props} >
    
      <View style={{ alignItems: 'center', justifyContent: 'center',marginTop: 25 }} >
        <Image 
        source={require('../../assets/img/Logo.png')} 
        style={{ width: 90, height: 90 }} 
        resizeMode="contain"
        />

        <Text 
          style={{ 
            color: theme.textPrimary, 
            fontSize: 18, 
            marginTop: 14, 
            fontWeight: '300', 
            marginBottom: 2 
          }}>
          FinApp
        </Text>

        <Text 
          style={{ 
            color: theme.textPrimary, 
            fontSize: 17, 
            fontWeight: 'bold', 
            marginBottom: 15, 
            paddingHorizontal: 20 
          }}>
          { user && user.name }
        </Text>

      </View>

      
      <DrawerItemList {...props} />

    </DrawerContentScrollView>
    
  )
}