import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PATH } from '@/constants';
import { Detail, Home } from '@/components/pages';
import { HeaderLeft } from '@/routes/Header/HeaderLeft';

const Stack = createStackNavigator();

export function HomeNavigator() {
	return (
		<Stack.Navigator initialRouteName={PATH.HOME}>
			<Stack.Screen
				name={PATH.HOME}
				component={Home}
				options={{
					headerLeft: () => <HeaderLeft />,
				}}
			/>
			<Stack.Screen name={PATH.DETAIL} component={Detail} />
		</Stack.Navigator>
	);
}
