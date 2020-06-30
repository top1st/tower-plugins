import { takeLatest } from 'redux-saga/effects';
import {
    WALLET_LIMITS_ADD_FETCH,
    WALLET_LIMITS_EDIT_FETCH,
    WALLET_LIMITS_GET_FETCH,
} from '../constants';
import { walletLimitsAddSaga } from './walletLimitsAddSaga';
import { walletLimitsEditSaga } from './walletLimitsEditSaga';
import { walletLimitsGetSaga } from './walletLimitsGetSaga';

export function* rootWalletLimitsSaga() {
    yield takeLatest(WALLET_LIMITS_ADD_FETCH, walletLimitsAddSaga);
    yield takeLatest(WALLET_LIMITS_EDIT_FETCH, walletLimitsEditSaga);
    yield takeLatest(WALLET_LIMITS_GET_FETCH, walletLimitsGetSaga);
}
