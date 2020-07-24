import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as UiContext from '@/contexts/ui';
import { STATUS, TStatus } from '@/constants/status';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

function ChangeStateButton(props: { state: TStatus }) {
	const { setApplicationState } = React.useContext(UiContext.Context);
	const { state } = props;

	return (
		<TouchableOpacity onPress={() => setApplicationState(state)}>
			<Text>Change state to {state}</Text>
		</TouchableOpacity>
	);
}

export function Loading() {
	return (
		<View style={styles.container}>
			<ChangeStateButton state={STATUS.AUTHORIZED} />
			<ChangeStateButton state={STATUS.UN_AUTHORIZED} />
			<ChangeStateButton state={STATUS.FIRST_OPEN} />
		</View>
	);
}
