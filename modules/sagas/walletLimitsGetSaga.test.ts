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
    walletLimitsGetData,
    walletLimitsGetError,
    walletLimitsGetFetch,
} from '../actions';
import { WalletLimitsData } from '../types';

describe('walletLimitsGetSaga test', () => {
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

    const fakeData: WalletLimitsData = {
        deposit: [{
            id: 1,
            level: 1,
            period: 72,
            limit: '200.00',
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

    const mockGetWalletLimitsRequest = () => {
        mockAxios.onGet(`/private/limits`).reply(200, fakeData);
    };

    const expectedActionsFetch = [
        walletLimitsGetFetch(),
        walletLimitsGetData(fakeData),
    ];

    const expectedActionsNetworkError = [
        walletLimitsGetFetch(),
        walletLimitsGetError(),
        alertPush({
            code: 500,
            message: ['Server error'],
            type: 'error',
        }),
    ];

    it('should fetch wallet limits in success flow', async () => {
        mockGetWalletLimitsRequest();
        const promise = new Promise(resolve => {
            store.subscribe(() => {
                const actions = store.getActions();
                if (actions.length === expectedActionsFetch.length) {
                    expect(actions).toEqual(expectedActionsFetch);
                    resolve();
                }
            });
        });
        store.dispatch(walletLimitsGetFetch());

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
        store.dispatch(walletLimitsGetFetch());

        return promise;
    });
});
