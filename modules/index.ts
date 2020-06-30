import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';
import {
    rootWalletLimitsSaga,
    walletLimitsReducer,
    WalletLimitsState,
} from './';

export * from './actions';
export * from './reducer';
export * from './selectors';
export * from './sagas';
export * from './types';

export interface WalletLimitsPluginState {
    walletLimitsPlugin: WalletLimitsState;
}

export const walletLimitPluginReducer = combineReducers({
    walletLimitsPlugin: walletLimitsReducer,
});

export function* rootWalletLimitsPluginsSaga() {
    yield all([
        call(rootWalletLimitsSaga),
    ]);
}
