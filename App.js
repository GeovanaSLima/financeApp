import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import { darkTheme } from './src/assets/theme';

export default function App() {
	const theme = darkTheme;

  return (	
		<ThemeProvider theme={theme}>
			<NavigationContainer >
				<StatusBar backgroundColor={theme.background} />
				<Routes />
			</NavigationContainer>
		</ThemeProvider>
  );
}
