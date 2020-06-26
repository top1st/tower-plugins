import { push } from 'react-router-redux';
import { call, put } from 'redux-saga/effects';
import { API } from 'tower-core/dist/api';
import { applogicRequestOptions, getCsrfToken } from 'tower-core/dist/helpers';
import { alertPush } from '../../../../../modules';
import {
    addIEOData,
    addIEOError,
    AddIEOFetch,
} from '../actions';

export function* addIEOSaga(action: AddIEOFetch) {
    try {
        const { data } = yield call(API.post(applogicRequestOptions(getCsrfToken())), '/admin/ieo/sales', action.payload);
        yield call(API.post(applogicRequestOptions(getCsrfToken())), '/admin/metadata', {
            key: `IEO-${data.currency_id}-${data.id}`,
            value: action.metadataPayload,
        });

        yield put(addIEOData(data));
        yield put(alertPush({message: ['IEO successfully created'], type: 'success'}));
        yield put(push('/tower/plugins/ieo'));
    } catch (error) {
        yield put(addIEOError());
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
