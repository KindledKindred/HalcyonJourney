import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PATH } from '@/constants/path';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export function Statistics() {
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Statistics</Text>
			<TouchableOpacity onPress={() => navigate(PATH.DETAIL)}>
				<Text>Go to Detail</Text>
			</TouchableOpacity>
		</View>
	);
}
