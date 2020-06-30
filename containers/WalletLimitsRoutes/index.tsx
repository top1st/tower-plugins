import * as React from 'react';
import { PrivateRoute } from '../../../../router';
import { WalletLimits } from '../WalletLimits';

export const walletLimitsRoutes = (userLoading, isCurrentSession) => {
    return ([
        <PrivateRoute
            loading={userLoading}
            isLogged={isCurrentSession}
            exact={true}
            path="/tower/plugins/walletLimits"
            component={WalletLimits}
        />,
    ]);
};

