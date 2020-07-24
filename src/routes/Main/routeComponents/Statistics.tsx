import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PATH } from '@/constants';
import { Detail, Statistics } from '@/components/pages';
import { HeaderLeft } from '@/routes/Header/HeaderLeft';

const Stack = createStackNavigator();

export function StatisticsNavigator() {
	return (
		<Stack.Navigator initialRouteName={PATH.STATISTICS}>
			<Stack.Screen
				name={PATH.STATISTICS}
				component={Statistics}
				options={{
					headerLeft: () => <HeaderLeft />,
				}}
			/>
			<Stack.Screen name={PATH.DETAIL} component={Detail} />
		</Stack.Navigator>
	);
}
