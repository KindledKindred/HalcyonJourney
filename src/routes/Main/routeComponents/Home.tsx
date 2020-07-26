import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PATH, COLOR } from '@/constants';
import { Detail, Home } from '@/components/pages';
import { HeaderLeft, headerStyle, headerTintColor } from '@/routes/Header/';

const cardStyle = {
	backgroundColor: COLOR.MAIN,
};

const Stack = createStackNavigator();

export function HomeNavigator() {
	return (
		<Stack.Navigator
			initialRouteName={PATH.HOME}
			screenOptions={{
				cardStyle,
				headerStyle,
				headerTintColor,
			}}
		>
			<Stack.Screen
				name={PATH.HOME}
				component={Home}
				options={{
					headerLeft: () => <HeaderLeft />,
					title: 'Home',
				}}
			/>
			<Stack.Screen name={PATH.DETAIL} component={Detail} options={{ title: 'Details ' }} />
		</Stack.Navigator>
	);
}
