import * as actions from './actions';
import { WalletLimitsData } from './types';

describe('Wallet limits actions', () => {
    it('should check WalletLimitsGetFetch action creator', () => {
        const expectedAction = {
            type: 'WALLET_LIMITS_GET_FETCH',
        };
        expect(actions.walletLimitsGetFetch()).toEqual(expectedAction);
    });

    it('should check WalletLimitsGetData action creator', () => {
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

        const expectedAction = {
            type: 'WALLET_LIMITS_GET_DATA',
            payload: fakeData,
        };

        expect(actions.walletLimitsGetData(fakeData)).toEqual(expectedAction);
    });

    it('should check WalletLimitsGetError action creator', () => {
        const expectedAction = { type: 'WALLET_LIMITS_GET_ERROR' };
        expect(actions.walletLimitsGetError()).toEqual(expectedAction);
    });

    it('should check WalletLimitsAddFetch action creator', () => {
        const fakePayload = {
            type: 'deposit',
            level: 1,
            period: 72,
            limit: '200.00',
        };

        const expectedAction = {
            type: 'WALLET_LIMITS_ADD_FETCH',
            payload: fakePayload,
        };
        expect(actions.walletLimitsAddFetch(fakePayload)).toEqual(expectedAction);
    });

    it('should check WalletLimitsAddData action creator', () => {
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

        const expectedAction = {
            type: 'WALLET_LIMITS_ADD_DATA',
            payload: fakeData,
        };

        expect(actions.walletLimitsAddData(fakeData)).toEqual(expectedAction);
    });

    it('should check WalletLimitsAddError action creator', () => {
        const expectedAction = { type: 'WALLET_LIMITS_ADD_ERROR' };
        expect(actions.walletLimitsAddError()).toEqual(expectedAction);
    });

    it('should check WalletLimitsEditFetch action creator', () => {
        const fakePayload = {
            id: 1,
            type: 'deposit',
            level: 1,
            period: 24,
            limit: '500.00',
        };

        const expectedAction = {
            type: 'WALLET_LIMITS_EDIT_FETCH',
            payload: fakePayload,
        };
        expect(actions.walletLimitsEditFetch(fakePayload)).toEqual(expectedAction);
    });

    it('should check WalletLimitsEditData action creator', () => {
        const fakeData: WalletLimitsData = {
            deposit: [{
                id: 1,
                level: 1,
                period: 24,
                limit: '500.00',
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

        const expectedAction = {
            type: 'WALLET_LIMITS_EDIT_DATA',
            payload: fakeData,
        };

        expect(actions.walletLimitsEditData(fakeData)).toEqual(expectedAction);
    });

    it('should check WalletLimitsEditError action creator', () => {
        const expectedAction = { type: 'WALLET_LIMITS_EDIT_ERROR' };
        expect(actions.walletLimitsEditError()).toEqual(expectedAction);
    });
});
