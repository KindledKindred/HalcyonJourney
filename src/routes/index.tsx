import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthWithRoutes } from '@/routes/Main';

export function Routes() {
	return (
		<NavigationContainer>
			<AuthWithRoutes />
		</NavigationContainer>
	);
}
