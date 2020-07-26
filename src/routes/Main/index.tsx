import React from 'react';
import { createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PATH, TPath, STATUS, TStatus, COLOR } from '@/constants';
import { headerStyle, headerTintColor } from '@/routes/Header';
import { Initial, Loading, ChooseLogin, UserInfo, Input, SignIn, SignUp } from '@/components/pages';
import { HomeNavigator, StatisticsNavigator, UserInfoNavigator } from '@/routes/Main/routeComponents';
import * as UiContext from '@/contexts/ui';

/**
 * Styles
 */
const cardStyle = {
	backgroundColor: COLOR.MAIN,
};
const drawerStyle = {
	backgroundColor: COLOR.MAIN,
};
const drawerContentOptions = {
	activeTintColor: COLOR.PRIMARY,
	inactiveTintColor: COLOR.WHITE,
};

/**
 * Navigation Stacks
 */
const Stack = createStackNavigator();
const ModalStack = createStackNavigator();
const ChooseLoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeDrawer = createDrawerNavigator();
const StatisticsDrawer = createDrawerNavigator();

/**
 * Animations
 */
const forFade = ({ current }: StackCardInterpolationProps) => ({
	cardStyles: { opacity: current.progress },
});

/**
 * Functional Methods
 */
const getActiveRouteName = (state: any): string => {
	if (!state || !state.routes) {
		return '';
	}
	const route = state.routes[state.index];

	if (route.state) {
		return getActiveRouteName(route.state);
	}
	return route.name;
};

/**
 * Components
 */
function HomeWithDrawer() {
	return (
		<HomeDrawer.Navigator
			initialRouteName={PATH.HOME}
			drawerStyle={drawerStyle}
			drawerContentOptions={drawerContentOptions}
		>
			<HomeDrawer.Screen name={PATH.HOME} component={HomeNavigator} />
			<HomeDrawer.Screen name={PATH.USER_INFO} component={UserInfoNavigator} />
		</HomeDrawer.Navigator>
	);
}

function StatisticsWithDrawer() {
	return (
		<StatisticsDrawer.Navigator
			initialRouteName={PATH.STATISTICS}
			drawerStyle={drawerStyle}
			drawerContentOptions={drawerContentOptions}
		>
			<StatisticsDrawer.Screen name={PATH.STATISTICS} component={StatisticsNavigator} />
			<StatisticsDrawer.Screen name={PATH.HOME} component={UserInfoNavigator} />
		</StatisticsDrawer.Navigator>
	);
}

function TabRoutes() {
	return (
		<Tab.Navigator
			initialRouteName={PATH.HOME}
			tabBarOptions={{
				inactiveTintColor: COLOR.WHITE,
				activeTintColor: COLOR.PRIMARY,
				style: { backgroundColor: COLOR.MAIN },
			}}
			screenOptions={(props: any) => {
				const routeName = getActiveRouteName(props.route.state);
				return {
					tabBarVisible: routeName !== PATH.USER_INFO,
				};
			}}
		>
			<Tab.Screen name={PATH.HOME} component={HomeWithDrawer} />
			<Tab.Screen name={PATH.STATISTICS} component={StatisticsWithDrawer} />
		</Tab.Navigator>
	);
}

function TabWidthModalRoutes() {
	return (
		<ModalStack.Navigator mode="modal" headerMode="none" screenOptions={{ cardStyle }}>
			<Stack.Screen name={PATH.HOME} component={TabRoutes} />
			<Stack.Screen name={PATH.INPUT} component={Input} />
		</ModalStack.Navigator>
	);
}

function ChooseLoginNavigator() {
	return (
		<ChooseLoginStack.Navigator
			initialRouteName={PATH.CHOOSE_LOGIN}
			screenOptions={{ cardStyle, headerStyle, headerTintColor }}
		>
			<ChooseLoginStack.Screen name={PATH.CHOOSE_LOGIN} component={ChooseLogin} options={{ title: 'Choose login' }} />
			<ChooseLoginStack.Screen name={PATH.SIGN_IN} component={SignIn} options={{ title: 'Sign in' }} />
			<ChooseLoginStack.Screen name={PATH.SIGN_UP} component={SignUp} options={{ title: 'Sign up' }} />
		</ChooseLoginStack.Navigator>
	);
}

function switchingAuthStatus(status: TStatus) {
	switch (status) {
		case STATUS.UN_AUTHORIZED:
			return <Stack.Screen name={PATH.CHOOSE_LOGIN} component={ChooseLoginNavigator} />;
		case STATUS.AUTHORIZED:
			return <Stack.Screen name={PATH.HOME} component={TabWidthModalRoutes} />;
		case STATUS.FIRST_OPEN:
		default:
			return <Stack.Screen name={PATH.INITIAL} component={Initial} />;
	}
}

export function AuthWithRoutes() {
	const uiContext = React.useContext(UiContext.Context);
	return (
		<Stack.Navigator
			initialRouteName={PATH.LOADING}
			headerMode="none"
			// TODO: 型エラーの解消
			screenOptions={{ cardStyleInterpolator: forFade }}
		>
			{uiContext.applicationState !== STATUS.LOADING ? (
				switchingAuthStatus(uiContext.applicationState)
			) : (
				<Stack.Screen name={PATH.LOADING} component={Loading} />
			)}
		</Stack.Navigator>
	);
}
