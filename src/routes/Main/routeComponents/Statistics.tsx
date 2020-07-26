import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PATH, COLOR } from '@/constants';
import { Detail, Statistics } from '@/components/pages';
import { HeaderLeft, headerStyle, headerTintColor } from '@/routes/Header';

const cardStyle = {
	backgroundColor: COLOR.MAIN,
};

const Stack = createStackNavigator();

export function StatisticsNavigator() {
	return (
		<Stack.Navigator
			initialRouteName={PATH.STATISTICS}
			screenOptions={{
				cardStyle,
				headerStyle,
				headerTintColor,
			}}
		>
			<Stack.Screen
				name={PATH.STATISTICS}
				component={Statistics}
				options={{
					headerLeft: () => <HeaderLeft />,
					title: 'Statistics',
				}}
			/>
			<Stack.Screen name={PATH.DETAIL} component={Detail} options={{ title: 'Detail' }} />
		</Stack.Navigator>
	);
}
