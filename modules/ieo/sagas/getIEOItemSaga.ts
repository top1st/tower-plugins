import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from 'tower-core/dist/api';
import { alertPush } from '../../../../../modules';
import {
    getIEOData,
    getIEOError,
    GetIEOFetch,
} from '../actions';

const requestOptions: RequestOptions = {
    apiVersion: 'applogic',
};

export function* getIEOItemSaga(action: GetIEOFetch) {
    try {
        const { data } = yield call(API.get(requestOptions), `/admin/ieo/sales/${action.payload.id}`);

        const details = yield call(
            API.get(requestOptions),
            `/public/metadata/search?key=IEO-${data.currency_id}-${data.id}`,
        );

        yield put(getIEOData({ ieo: data, details: details.data.value }));
    } catch (error) {
        yield put(getIEOError());
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
