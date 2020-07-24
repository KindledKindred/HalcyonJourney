export const STATUS = {
	LOADING: 'loading',
	FIRST_OPEN: 'firstOpen',
	UN_AUTHORIZED: 'unAuthorized',
	AUTHORIZED: 'authorized',
} as const;

export type TStatus = typeof STATUS[keyof typeof STATUS];
