
import { SvgIcon } from '@material-ui/core';
import * as React from 'react';
import { HeaderActions, MenuItem } from '../TowerPlugin';
import { IEOHeaderActions } from './components';

const getIEO = () => {
    return [ 'proportional', 'fcfs' ];
};

export const ieoTypesList = getIEO();

export const ieoMenuItem: MenuItem[] = [
    { key: '/tower/plugins/ieo', value: 'IEO', isLink: true },
];

export const ieoMenuIcons = (name: string) => {
    switch (name) {
        case '/tower/plugins/ieo':
            return (
                <svg width="32" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.4 16.625H21.6V2.375H2.4V16.625ZM2.4 0H21.6C22.92 0 24 1.05687 24 2.375V16.625C24 17.2549 23.7471 17.859 23.2971 18.3044C22.847 18.7498 22.2365 19 21.6 19H2.4C1.76348 19 1.15303 18.7498 0.702944 18.3044C0.252856 17.859 0 17.2549 0 16.625V2.375C0 1.05687 1.068 0 2.4 0ZM18.8652 11.5735C19.1121 11.0663 19.2355 10.4834 19.2355 9.82471V9.51392C19.2324 8.8645 19.1043 8.28931 18.8511 7.78833C18.6011 7.28426 18.2496 6.89616 17.7964 6.62402C17.3433 6.35189 16.8277 6.21582 16.2496 6.21582C15.6652 6.21582 15.1433 6.35343 14.6839 6.62866C14.2277 6.90389 13.8761 7.29508 13.6293 7.80225C13.3855 8.30631 13.2636 8.88924 13.2636 9.55103V9.9314C13.2761 10.5684 13.4074 11.1328 13.6574 11.6245C13.9105 12.1162 14.2621 12.495 14.7121 12.761C15.1621 13.0238 15.6777 13.1553 16.2589 13.1553C16.8402 13.1553 17.3574 13.0192 17.8105 12.7471C18.2668 12.4718 18.6183 12.0806 18.8652 11.5735ZM17.2199 8.01562C17.448 8.36198 17.5621 8.87069 17.5621 9.54175V9.85254C17.5589 10.5081 17.4449 11.0107 17.2199 11.3601C16.9949 11.7096 16.6746 11.8843 16.2589 11.8843C15.8214 11.8843 15.4918 11.7065 15.2699 11.3508C15.048 10.9952 14.9371 10.4865 14.9371 9.82471L14.9418 9.32837C14.9886 8.10376 15.4246 7.49146 16.2496 7.49146C16.6714 7.49146 16.9949 7.66618 17.2199 8.01562ZM6.7002 13.0625H5.05957V6.30859H6.7002V13.0625ZM12.1968 10.2004H9.60926V11.8101H12.6655V13.0625H7.96395V6.30859H12.6749V7.56567H9.60926V8.98975H12.1968V10.2004Z" fill="#979797"/>
                </svg>
            );
        default:
            return (
                <SvgIcon />
            );
    }
};

export const pagesWithFilter = ['/tower/plugins/ieo'];

export const pagesWithRefresh = ['/tower/plugins/ieo'];

export const ieoActions: HeaderActions = {
    pagesWithFilter,
    pagesWithRefresh,
    customHeaderActions: <IEOHeaderActions key="ieo"/>,
};
