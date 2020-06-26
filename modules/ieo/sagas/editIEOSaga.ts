import { push } from 'react-router-redux';
import { call, put } from 'redux-saga/effects';
import { API } from 'tower-core/dist/api';
import { applogicRequestOptions, getCsrfToken } from 'tower-core/dist/helpers';
import { alertPush } from '../../../../../modules';
import {
    editIEOData,
    editIEOError,
    EditIEOFetch,
} from '../actions';

export function* editIEOSaga(action: EditIEOFetch) {
    try {
        const { id, state, params } = action.payload;
        const stateParam = state ? `/${state}` : '';
        const { data } = yield call(API.put(applogicRequestOptions(getCsrfToken())), `/admin/ieo/sales/${id}${stateParam}`, params);

        yield put(editIEOData(data));
        yield put(alertPush({message: ['IEO successfully updated'], type: 'success'}));
        yield put(push('/tower/plugins/ieo'));
    } catch (error) {
        yield put(editIEOError());
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
