import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { AuthContext } from '../contexts/auth';
import { useTheme } from 'styled-components/native';

export default function Routes() {
	const theme  = useTheme();
	const { signed, loading } = useContext(AuthContext);

	if (loading) {
		return(
			<View style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: theme.background
			}}>
				<ActivityIndicator size="large" color={theme.primary} />
			</View>
		)
	}
	
	return(
		signed ? <AppRoutes/> : <AuthRoutes/>
	)
}