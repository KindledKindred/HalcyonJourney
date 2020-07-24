import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PATH } from '@/constants';
import { UserInfo } from '@/components/pages';
import { HeaderLeft } from '@/routes/Header/HeaderLeft';

const Stack = createStackNavigator();

export function UserInfoNavigator() {
	return (
		<Stack.Navigator initialRouteName={PATH.STATISTICS}>
			<Stack.Screen
				name={PATH.USER_INFO}
				component={UserInfo}
				options={{
					headerLeft: () => <HeaderLeft />,
				}}
			/>
		</Stack.Navigator>
	);
}
