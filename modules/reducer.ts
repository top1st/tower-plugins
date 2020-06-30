import { WalletLimitsAction } from './actions';
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
import { WalletLimitsData } from './types';

export interface WalletLimitsState {
    add: {
        success: boolean;
        loading: boolean;
        error: boolean;
        data?: WalletLimitsData;
    };
    edit: {
        success: boolean;
        loading: boolean;
        error: boolean;
        data?: WalletLimitsData;
    };
    get: {
        success: boolean;
        loading: boolean;
        error: boolean;
        data?: WalletLimitsData;
    };
}

export const initialWalletLimitsState: WalletLimitsState = {
    add: {
        success: false,
        loading: false,
        error: false,
    },
    edit: {
        success: false,
        loading: false,
        error: false,
    },
    get: {
        success: false,
        loading: false,
        error: false,
    },
};

export const walletLimitsAddReducer = (state: WalletLimitsState['add'], action: WalletLimitsAction) => {
    switch (action.type) {
        case WALLET_LIMITS_ADD_FETCH:
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
            };
        case WALLET_LIMITS_ADD_DATA:
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
            };
        case WALLET_LIMITS_ADD_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
            };
        default:
            return state;
    }
};

export const walletLimitsEditReducer = (state: WalletLimitsState['edit'], action: WalletLimitsAction) => {
    switch (action.type) {
        case WALLET_LIMITS_EDIT_FETCH:
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
            };
        case WALLET_LIMITS_EDIT_DATA:
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
            };
        case WALLET_LIMITS_EDIT_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
            };
        default:
            return state;
    }
};

export const walletLimitsGetReducer = (state: WalletLimitsState['get'], action: WalletLimitsAction) => {
    switch (action.type) {
        case WALLET_LIMITS_GET_FETCH:
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
            };
        case WALLET_LIMITS_GET_DATA:
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
            };
        case WALLET_LIMITS_GET_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
            };
        default:
            return state;
    }
};

export const walletLimitsReducer = (state = initialWalletLimitsState, action: WalletLimitsAction) => {
    switch (action.type) {
        case WALLET_LIMITS_ADD_FETCH:
        case WALLET_LIMITS_ADD_DATA:
        case WALLET_LIMITS_ADD_ERROR:
            const walletLimitsAddState = { ...state.add };

            return {
                ...state,
                add: walletLimitsAddReducer(walletLimitsAddState, action),
            };
        case WALLET_LIMITS_EDIT_FETCH:
        case WALLET_LIMITS_EDIT_DATA:
        case WALLET_LIMITS_EDIT_ERROR:
            const walletLimitsEditState = { ...state.edit };

            return {
                ...state,
                edit: walletLimitsEditReducer(walletLimitsEditState, action),
            };
        case WALLET_LIMITS_GET_FETCH:
        case WALLET_LIMITS_GET_DATA:
        case WALLET_LIMITS_GET_ERROR:
            const walletLimitsGetState = { ...state.get };

            return {
                ...state,
                get: walletLimitsGetReducer(walletLimitsGetState, action),
            };
        default:
            return state;
    }
};
