import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
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
						backgroundColor: '#F6C445',
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