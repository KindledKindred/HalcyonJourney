import React from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

function Main() {
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Main</Text>
			<TouchableOpacity
				onPress={() => {
					navigate('Sub', {
						title: 'from Main',
					});
				}}
			>
				<Text>go to sub</Text>
			</TouchableOpacity>
		</View>
	);
}

function Sub() {
	return (
		<View style={styles.container}>
			<Text>Sub</Text>
		</View>
	);
}

const Stack = createStackNavigator();
function StackNavigatior() {
	return (
		<Stack.Navigator
			headerMode="none"
			screenOptions={({ route }) => ({
				title: route.name,
			})}
		>
			<Stack.Screen name="Main" component={Main} />
			<Stack.Screen name="Sub" component={Sub} />
		</Stack.Navigator>
	);
}

function Index() {
	return (
		<>
			<NavigationContainer onStateChange={newState => console.log(newState)}>
				<StackNavigatior />
			</NavigationContainer>
		</>
	);
}

export { Index };
