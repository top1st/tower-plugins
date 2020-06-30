import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../../../modules';
import {
    walletLimitsGetData,
    walletLimitsGetError,
    WalletLimitsGetFetch,
} from '../actions';

const requestOptions: RequestOptions = {
    apiVersion: 'applogic',
};

export function* walletLimitsGetSaga(action: WalletLimitsGetFetch) {
    try {
        const { data } = yield call(API.get(requestOptions), `/private/limits`);
        yield put(walletLimitsGetData(data));
    } catch (error) {
        yield put(walletLimitsGetError());
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
