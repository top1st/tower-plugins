import { pluginsList } from '../../api/config';
import { MenuItem } from '../TowerPlugin';

export const getWalletLimits = () => {
    const walletLimits = pluginsList().find(item => item.name === 'walletLimits');

    return walletLimits;
};

export const walletLimitsMenuItem: MenuItem[] = [
    { key: '/tower/plugins/walletLimits', value: 'Wallet Limits', isLink: true },
];
