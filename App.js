import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';
import { darkTheme } from './src/assets/theme';

export default function App() {
	const theme = darkTheme;

  return (	
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<AuthProvider>
					<StatusBar backgroundColor={theme.background} />
					<Routes />
				</AuthProvider>
			</NavigationContainer>
		</ThemeProvider>
  );
}
