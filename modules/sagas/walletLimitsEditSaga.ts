import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../../../modules';
import {
    walletLimitsEditData,
    walletLimitsEditError,
    WalletLimitsEditFetch,
} from '../actions';

const requestOptions: RequestOptions = {
    apiVersion: 'applogic',
};

export function* walletLimitsEditSaga(action: WalletLimitsEditFetch) {
    try {
        const { data } = yield call(API.put(requestOptions), '/private/limits', action.payload);
        yield put(walletLimitsEditData(data));
    } catch (error) {
        yield put(walletLimitsEditError());
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
