import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PATH } from '@/constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export function ChooseLogin() {
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<Text>ChooseLogin</Text>
			<TouchableOpacity onPress={() => navigate(PATH.SIGN_IN)}>
				<Text>Go to Sign in</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigate(PATH.SIGN_UP)}>
				<Text>Go to Sign up</Text>
			</TouchableOpacity>
		</View>
	);
}
