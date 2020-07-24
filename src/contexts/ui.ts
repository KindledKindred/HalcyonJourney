import React from 'react';
import { STATUS, TStatus } from '@/constants/status';

export function createApplicationInitialState(): TStatus {
	return STATUS.LOADING;
}

export const Context = React.createContext({
	applicationState: createApplicationInitialState(),
	setApplicationState: (_: TStatus) => {},
});
