import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { useTheme } from "styled-components/native";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
	const theme = useTheme();

	return(
		<AuthStack.Navigator>
			<AuthStack.Screen 
				name="SignIn"
				component={SignIn}
				options={{
					headerShown: false,
				}}
			/>

			<AuthStack.Screen 
				name="SignUp"
				component={SignUp}
				options={{
						headerStyle: {
						backgroundColor:theme.primary,
						borderBottomWidth: 1,
						borderBottomColor: '#FFF'
					},
					headerTitle: 'Voltar',
					headerBackTitleVisible: false
				}}
			/>
		</AuthStack.Navigator>
	)
}