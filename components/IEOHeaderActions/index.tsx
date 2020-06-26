import { createStyles, SvgIcon, Theme, WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { History } from 'history';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const styles = () => createStyles({
    item: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 4,
        cursor: 'pointer',
        transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        padding: '5px 10px',
        borderRadius: 5,
        '&:hover': {
            backgroundColor: '#ffffff1a',
        },
    },
    itemText: {
        textTransform: 'uppercase',
        paddingLeft: 6,
        fontWeight: 'bold',
        fontSize: 12,
        letterSpacing: 0.4,
    },
});

interface RouterProps {
    history: History;
}

interface StyleProps extends WithStyles<typeof styles> {
    theme?: Theme;
}

type Props = StyleProps & RouterProps;

class IEOHeaderActionsComponent extends React.Component<Props> {
    public getAddPageIcon = () => (
        <SvgIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10
                2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 0C8.68678
                0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035
                2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957
                2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642
                19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464
                15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362
                4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268
                0.761205C12.6136 0.258658 11.3132 0 10 0ZM11 5H9V9H5V11H9V15H11V11H15V9H11V5Z"
                fill="white"
            />
        </SvgIcon>
    );

    public shouldShowAddIEO(location: string): boolean {
        return ['/tower/plugins/ieo'].includes(location);
    }

    public handleAddIEO() {
        this.props.history.push('/tower/plugins/ieo/add');
    }

    public render() {
        const { history, classes } = this.props;
        return (
            this.shouldShowAddIEO(history.location.pathname) && (
                <div className={classes.item} onClick={() => this.handleAddIEO()}>
                    {this.getAddPageIcon()} <span className={classes.itemText}>Add IEO</span>
                </div>
            )
        );
    }
}

export const IEOHeaderActions = compose(
    withRouter,
    withStyles(styles, { withTheme: true }),
)(IEOHeaderActionsComponent) as React.ComponentClass;
