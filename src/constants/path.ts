import { types } from '@babel/core';

export const PATH = {
	INITIAL: 'INITIAL',
	HOME: 'HOME',
	DETAIL: 'DETAIL',
	SIGN_UP: 'SIGN_UP',
	SIGN_IN: 'SIGN_IN',
	USER_INFO: 'USER_INFO',
	STATISTICS: 'STATISTICS',
	LOADING: 'LOADING',
	CHOOSE_LOGIN: 'CHOOSE_LOGIN',
	INPUT: 'INPUT',
} as const;

export type TPath = typeof PATH[keyof typeof PATH];
