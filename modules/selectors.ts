import { AppState } from '../../../modules';
import { WalletLimitsState } from './reducer';

/* Wallet limits add */
export const selectWalletLimitsAddSuccess = (state: AppState): boolean =>
    state.plugins.walletLimits.walletLimitsPlugin.add.success;

export const selectWalletLimitsAddLoading = (state: AppState): boolean =>
    state.plugins.walletLimits.walletLimitsPlugin.add.loading;

export const selectWalletLimitsAddError = (state: AppState): boolean =>
    state.plugins.walletLimits.walletLimitsPlugin.add.error;

export const selectWalletLimitsAddData = (state: AppState): WalletLimitsState['add']['data'] =>
    state.plugins.walletLimits.walletLimitsPlugin.add.data;

/* Wallet limits add */
export const selectWalletLimitsEditSuccess = (state: AppState): boolean =>
    state.plugins.walletLimits.walletLimitsPlugin.edit.success;

export const selectWalletLimitsEditLoading = (state: AppState): boolean =>
    state.plugins.walletLimits.walletLimitsPlugin.edit.loading;

export const selectWalletLimitsEditData = (state: AppState): WalletLimitsState['edit']['data'] =>
    state.plugins.walletLimits.walletLimitsPlugin.edit.data;

export const selectWalletLimitsEditError = (state: AppState): boolean =>
    state.plugins.walletLimits.walletLimitsPlugin.edit.error;

/* Wallet limits get */
export const selectWalletLimitsGetSuccess = (state: AppState): boolean =>
    state.plugins.walletLimits.walletLimitsPlugin.get.success;

export const selectWalletLimitsGetLoading = (state: AppState): boolean =>
    state.plugins.walletLimits.walletLimitsPlugin.get.loading;

export const selectWalletLimitsGetError = (state: AppState): boolean =>
    state.plugins.walletLimits.walletLimitsPlugin.get.error;

export const selectWalletLimitsGetData = (state: AppState): WalletLimitsState['get']['data'] =>
    state.plugins.walletLimits.walletLimitsPlugin.get.data;
