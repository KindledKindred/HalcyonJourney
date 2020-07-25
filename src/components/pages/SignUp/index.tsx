import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Context } from '@/contexts/ui';
import { STATUS } from '@/constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export function SignUp() {
	const { setApplicationState } = React.useContext(Context);
	return (
		<View style={styles.container}>
			<Text>SignUp</Text>
			<TouchableOpacity onPress={() => setApplicationState(STATUS.AUTHORIZED)}>
				<Text>Sign Up</Text>
			</TouchableOpacity>
		</View>
	);
}
