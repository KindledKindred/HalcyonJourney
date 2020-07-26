import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PATH, COLOR } from '@/constants';
import { UserInfo } from '@/components/pages';
import { HeaderLeft, headerStyle, headerTintColor } from '@/routes/Header';

const cardStyle = {
	backgroundColor: COLOR.MAIN,
};

const Stack = createStackNavigator();

export function UserInfoNavigator() {
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
				name={PATH.USER_INFO}
				component={UserInfo}
				options={{
					headerLeft: () => <HeaderLeft />,
					title: 'User info',
				}}
			/>
		</Stack.Navigator>
	);
}
