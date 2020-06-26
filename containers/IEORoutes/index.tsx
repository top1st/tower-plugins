import * as React from 'react';
import { PrivateRoute } from 'tower-core/dist/components/Routes';
import {
    IEO,
    IEOCreate,
    IEOTabs,
} from '../';

export const ieoRoutes = (userLoading, isCurrentSession) => {

    return ([
            <PrivateRoute
                loading={userLoading}
                isLogged={isCurrentSession}
                exact={true}
                path="/tower/plugins/ieo/:id/edit"
                component={IEOTabs}
            />,
            <PrivateRoute
                loading={userLoading}
                isLogged={isCurrentSession}
                exact={true}
                path="/tower/plugins/ieo/:id/history"
                component={IEOTabs}
            />,
            <PrivateRoute
                loading={userLoading}
                isLogged={isCurrentSession}
                exact={true}
                path="/tower/plugins/ieo/add"
                component={IEOCreate}
            />,
            <PrivateRoute
                loading={userLoading}
                isLogged={isCurrentSession}
                exact={true}
                path="/tower/plugins/ieo"
                component={IEO}
            />,
    ]);
};

