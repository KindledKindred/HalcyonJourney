import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

function Index(): JSX.Element {
	return <View style={styles.container} />;
}

export { Index };
