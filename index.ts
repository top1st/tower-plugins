import { TowerPlugin, TowerPluginInterface } from '../TowerPlugin';
import { walletLimitsMenuItem } from './constants';
import { walletLimitsRoutes } from './containers';
import { rootWalletLimitsSaga, walletLimitPluginReducer } from './modules';

export * from './containers';
export * from './modules';

export const WalletLimitsPlugin: TowerPluginInterface =
    new TowerPlugin(walletLimitPluginReducer, rootWalletLimitsSaga, walletLimitsRoutes, null, walletLimitsMenuItem, null);
