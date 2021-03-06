import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/routers';

export function HeaderLeft() {
	const { dispatch } = useNavigation();
	const onPress = React.useCallback(() => {
		dispatch(DrawerActions.openDrawer());
	}, [dispatch]);

	return (
		<TouchableOpacity onPress={onPress}>
			<Text>open</Text>
		</TouchableOpacity>
	);
}
