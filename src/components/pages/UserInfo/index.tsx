import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { STATUS } from '@/constants';
import { Context } from '@/contexts/ui';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export function UserInfo() {
	const { setApplicationState } = React.useContext(Context);
	return (
		<View style={styles.container}>
			<Text>UserInfo</Text>
			<TouchableOpacity onPress={() => setApplicationState(STATUS.UN_AUTHORIZED)}>
				<Text>Sign out</Text>
			</TouchableOpacity>
		</View>
	);
}
