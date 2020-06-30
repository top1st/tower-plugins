import * as actions from './actions';
import { initialWalletLimitsState, walletLimitsReducer } from './reducer';
import { WalletLimitsData } from './types';

describe('Wallet limits reducer', () => {
    const fakeAddPayload = {
        type: 'deposit',
        level: 1,
        period: 72,
        limit: '200.00',
    };

    const fakeEditPayload = {
        id: 1,
        type: 'deposit',
        level: 1,
        period: 24,
        limit: '500.00',
    };

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

    it('should handle WALLET_LIMITS_GET_FETCH', () => {
        const expectedState = {
            ...initialWalletLimitsState,
            get: {
                ...initialWalletLimitsState.get,
                loading: true,
                success: false,
                error: false,
            },
         };
        expect(walletLimitsReducer(initialWalletLimitsState, actions.walletLimitsGetFetch())).toEqual(expectedState);
    });

    it('should handle WALLET_LIMITS_GET_DATA', () => {
        const expectedState = {
            ...initialWalletLimitsState,
            get: {
                ...initialWalletLimitsState.get,
                data: fakeData,
                loading: false,
                success: true,
                error: false,
            },
        };

        expect(walletLimitsReducer(initialWalletLimitsState, actions.walletLimitsGetData(fakeData))).toEqual(expectedState);
    });

    it('should handle WALLET_LIMITS_GET_ERROR', () => {
        const expectedState = {
            ...initialWalletLimitsState,
            get: {
                ...initialWalletLimitsState.get,
                loading: false,
                success: false,
                error: true,
            },
        };

        expect(walletLimitsReducer(initialWalletLimitsState, actions.walletLimitsGetError())).toEqual(expectedState);
    });

    it('should handle WALLET_LIMITS_ADD_FETCH', () => {
        const expectedState = {
            ...initialWalletLimitsState,
            add: {
                ...initialWalletLimitsState.add,
                loading: true,
                success: false,
                error: false,
            },
         };
        expect(walletLimitsReducer(initialWalletLimitsState, actions.walletLimitsAddFetch(fakeAddPayload))).toEqual(expectedState);
    });

    it('should handle WALLET_LIMITS_ADD_DATA', () => {
        const expectedState = {
            ...initialWalletLimitsState,
            add: {
                ...initialWalletLimitsState.add,
                data: fakeData,
                loading: false,
                success: true,
                error: false,
            },
        };

        expect(walletLimitsReducer(initialWalletLimitsState, actions.walletLimitsAddData(fakeData))).toEqual(expectedState);
    });

    it('should handle WALLET_LIMITS_ADD_ERROR', () => {
        const expectedState = {
            ...initialWalletLimitsState,
            add: {
                ...initialWalletLimitsState.add,
                loading: false,
                success: false,
                error: true,
            },
        };

        expect(walletLimitsReducer(initialWalletLimitsState, actions.walletLimitsAddError())).toEqual(expectedState);
    });

    it('should handle WALLET_LIMITS_EDIT_FETCH', () => {
        const expectedState = {
            ...initialWalletLimitsState,
            edit: {
                ...initialWalletLimitsState.edit,
                loading: true,
                success: false,
                error: false,
            },
         };
        expect(walletLimitsReducer(initialWalletLimitsState, actions.walletLimitsEditFetch(fakeEditPayload))).toEqual(expectedState);
    });

    it('should handle WALLET_LIMITS_EDIT_DATA', () => {
        const expectedState = {
            ...initialWalletLimitsState,
            edit: {
                ...initialWalletLimitsState.edit,
                data: fakeData,
                loading: false,
                success: true,
                error: false,
            },
        };

        expect(walletLimitsReducer(initialWalletLimitsState, actions.walletLimitsEditData(fakeData))).toEqual(expectedState);
    });

    it('should handle WALLET_LIMITS_EDIT_ERROR', () => {
        const expectedState = {
            ...initialWalletLimitsState,
            edit: {
                ...initialWalletLimitsState.edit,
                loading: false,
                success: false,
                error: true,
            },
        };

        expect(walletLimitsReducer(initialWalletLimitsState, actions.walletLimitsEditError())).toEqual(expectedState);
    });
});
