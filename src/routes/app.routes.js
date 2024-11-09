import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { darkTheme } from "../assets/theme";
import { ThemeProvider } from "styled-components";

import Home from "../pages/Home";
import NewEntry from "../pages/NewEntry";
import Profile from "../pages/Profile";
import Sidebar from "../components/Sidebar";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  const theme = darkTheme;

  return(
    <ThemeProvider theme={theme}>
      <AppDrawer.Navigator
      drawerContent={ (props) => <Sidebar {...props} /> }
        screenOptions={{
          headerShown: false,

          drawerStyle: {
            backgroundColor: theme.backgroundVariant,
            paddingTop: 20,
          },

          drawerActiveBackgroundColor: theme.primary,
          drawerActiveTintColor: theme.background,

          drawerInactiveBackgroundColor: theme.backgroundVariant,
          drawerInactiveTintColor: theme.textSecondary
        }}
      >
        <AppDrawer.Screen
          name="Home"
          component={Home}
        />

        <AppDrawer.Screen
          name="Registrar Movimentação"
          component={NewEntry}
        />

        <AppDrawer.Screen
          name="Perfil"
          component={Profile}
        />

      </AppDrawer.Navigator>
    </ThemeProvider>
  )
}

export default AppRoutes;