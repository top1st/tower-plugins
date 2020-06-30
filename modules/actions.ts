import {
    WALLET_LIMITS_ADD_DATA,
    WALLET_LIMITS_ADD_ERROR,
    WALLET_LIMITS_ADD_FETCH,
    WALLET_LIMITS_EDIT_DATA,
    WALLET_LIMITS_EDIT_ERROR,
    WALLET_LIMITS_EDIT_FETCH,
    WALLET_LIMITS_GET_DATA,
    WALLET_LIMITS_GET_ERROR,
    WALLET_LIMITS_GET_FETCH,
} from './constants';
import {
    WalletLimitsData,
    WalletLimitsDataDeposit,
    WalletLimitsDataWithdraw,
} from './types';

export interface WalletLimitsAddFetch {
    type: typeof WALLET_LIMITS_ADD_FETCH;
    payload: WalletLimitsDataDeposit | WalletLimitsDataWithdraw;
}

export interface WalletLimitsAddData {
    type: typeof WALLET_LIMITS_ADD_DATA;
    payload: WalletLimitsData;
}

export interface WalletLimitsAddError {
    type: typeof WALLET_LIMITS_ADD_ERROR;
}

export interface WalletLimitsEditFetch {
    type: typeof WALLET_LIMITS_EDIT_FETCH;
    payload: WalletLimitsDataDeposit | WalletLimitsDataWithdraw;
}

export interface WalletLimitsEditData {
    type: typeof WALLET_LIMITS_EDIT_DATA;
    payload: WalletLimitsData;
}

export interface WalletLimitsEditError {
    type: typeof WALLET_LIMITS_EDIT_ERROR;
}

export interface WalletLimitsGetFetch {
    type: typeof WALLET_LIMITS_GET_FETCH;
}

export interface WalletLimitsGetData {
    type: typeof WALLET_LIMITS_GET_DATA;
    payload: WalletLimitsData;
}

export interface WalletLimitsGetError {
    type: typeof WALLET_LIMITS_GET_ERROR;
}


export type WalletLimitsAction = WalletLimitsAddFetch
    | WalletLimitsAddData
    | WalletLimitsAddError
    | WalletLimitsEditFetch
    | WalletLimitsEditData
    | WalletLimitsEditError
    | WalletLimitsGetFetch
    | WalletLimitsGetData
    | WalletLimitsGetError;

export const walletLimitsAddFetch = (payload: WalletLimitsAddFetch['payload']): WalletLimitsAddFetch => ({
    type: WALLET_LIMITS_ADD_FETCH,
    payload,
});

export const walletLimitsAddData = (payload: WalletLimitsAddData['payload']): WalletLimitsAddData => ({
    type: WALLET_LIMITS_ADD_DATA,
    payload,
});

export const walletLimitsAddError = (): WalletLimitsAddError => ({
    type: WALLET_LIMITS_ADD_ERROR,
});

export const walletLimitsEditFetch = (payload: WalletLimitsEditFetch['payload']): WalletLimitsEditFetch => ({
    type: WALLET_LIMITS_EDIT_FETCH,
    payload,
});

export const walletLimitsEditData = (payload: WalletLimitsEditData['payload']): WalletLimitsEditData => ({
    type: WALLET_LIMITS_EDIT_DATA,
    payload,
});

export const walletLimitsEditError = (): WalletLimitsEditError => ({
    type: WALLET_LIMITS_EDIT_ERROR,
});

export const walletLimitsGetFetch = (): WalletLimitsGetFetch => ({
    type: WALLET_LIMITS_GET_FETCH,
});

export const walletLimitsGetData = (payload: WalletLimitsGetData['payload']): WalletLimitsGetData => ({
    type: WALLET_LIMITS_GET_DATA,
    payload,
});

export const walletLimitsGetError = (): WalletLimitsGetError => ({
    type: WALLET_LIMITS_GET_ERROR,
});
