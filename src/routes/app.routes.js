import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ThemeProvider } from "styled-components";

import Home from "../pages/Home";
import { darkTheme } from "../assets/theme";


const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  const theme = darkTheme;

  return(
    <ThemeProvider theme={theme}>
      <AppDrawer.Navigator
        screenOptions={{
          headerShown: false,

          drawerStyle: {
            backgroundColor: theme.placeholder,
            paddingTop: 20,
          },

          drawerActiveBackgroundColor: theme.primary,
          drawerActiveTintColor: theme.background,

          drawerInactiveBackgroundColor: theme.border,
          drawerInactiveTintColor: theme.input
        }}
      >
        <AppDrawer.Screen
          name="Home"
          component={Home}
        />
      </AppDrawer.Navigator>
    </ThemeProvider>
  )
}

export default AppRoutes;