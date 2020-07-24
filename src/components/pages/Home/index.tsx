import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PATH } from '@/constants/path';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export function Home() {
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<TouchableOpacity onPress={() => navigate(PATH.DETAIL)}>
				<Text>Go to Detail</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigate(PATH.INPUT)}>
				<Text>Open Input</Text>
			</TouchableOpacity>
		</View>
	);
}
