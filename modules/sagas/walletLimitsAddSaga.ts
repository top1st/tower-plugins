import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../../../modules';
import {
    walletLimitsAddData,
    walletLimitsAddError,
    WalletLimitsAddFetch,
} from '../actions';

const requestOptions: RequestOptions = {
    apiVersion: 'applogic',
};

export function* walletLimitsAddSaga(action: WalletLimitsAddFetch) {
    try {
        const { data } = yield call(API.post(requestOptions), '/private/limits', action.payload);
        yield put(walletLimitsAddData(data));
    } catch (error) {
        yield put(walletLimitsAddError());
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
