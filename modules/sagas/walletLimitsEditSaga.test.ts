import MockAdapter from 'axios-mock-adapter';
import { MockStoreEnhanced } from 'redux-mock-store';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import {
    mockNetworkError,
    setupMockAxios,
    setupMockStore,
} from '../../../../helpers';
import { alertPush, rootSaga } from '../../../../modules';
import {
    walletLimitsEditData,
    walletLimitsEditError,
    walletLimitsEditFetch,
} from '../actions';
import { WalletLimitsData } from '../types';

describe('walletLimitsEditSaga test', () => {
    let store: MockStoreEnhanced;
    let sagaMiddleware: SagaMiddleware<{}>;
    let mockAxios: MockAdapter;

    beforeEach(() => {
        mockAxios = setupMockAxios();
        sagaMiddleware = createSagaMiddleware();
        store = setupMockStore(sagaMiddleware, false)();
        sagaMiddleware.run(rootSaga);
    });

    afterEach(() => {
        mockAxios.reset();
    });

    const fakePayload = {
        id: 1,
        type: 'deposit',
        level: 1,
        period: 72,
        limit: '800.00',
    };

    const fakeData: WalletLimitsData = {
        deposit: [{
            id: 1,
            level: 1,
            period: 72,
            limit: '800.00',
        },
        {
            id: 45,
            level: 2,
            period: 72,
            limit: '2000.00',
        }],
        withdraw: [{
            id: 1,
            currency: 'usd',
            level: 1,
            period: 24,
            limit: '1000.00',
        }],
    };

    const mockPutWalletLimitsRequest = () => {
        mockAxios.onPut(`/private/limits`).reply(201, fakeData);
    };

    const expectedActionsFetch = [
        walletLimitsEditFetch(fakePayload),
        walletLimitsEditData(fakeData),
    ];

    const expectedActionsNetworkError = [
        walletLimitsEditFetch(fakePayload),
        walletLimitsEditError(),
        alertPush({
            code: 500,
            message: ['Server error'],
            type: 'error',
        }),
    ];

    it('should edit wallet limits in success flow', async () => {
        mockPutWalletLimitsRequest();
        const promise = new Promise(resolve => {
            store.subscribe(() => {
                const actions = store.getActions();
                if (actions.length === expectedActionsFetch.length) {
                    expect(actions).toEqual(expectedActionsFetch);
                    resolve();
                }
            });
        });
        store.dispatch(walletLimitsEditFetch(fakePayload));

        return promise;
    });

    it('should trigger network error', async () => {
        mockNetworkError(mockAxios);
        const promise = new Promise(resolve => {
            store.subscribe(() => {
                const actions = store.getActions();
                if (actions.length === expectedActionsNetworkError.length) {
                    expect(actions).toEqual(expectedActionsNetworkError);
                    resolve();
                }
            });
        });
        store.dispatch(walletLimitsEditFetch(fakePayload));

        return promise;
    });
});
