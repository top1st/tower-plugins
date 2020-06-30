import {
    Button,
    createStyles,
    Paper,
    TextField,
    Theme,
    Typography,
    withStyles,
    WithStyles,
} from '@material-ui/core';
import * as React from 'react';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AppState } from '../../../../modules';
import {
    selectWalletLimitsEditData,
    selectWalletLimitsEditSuccess,
    selectWalletLimitsGetData,
    WalletLimitsData,
    WalletLimitsDataDeposit,
    WalletLimitsDataWithdraw,
    walletLimitsEditFetch,
    walletLimitsGetFetch,
} from '../../modules';

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20,
        padding: theme.spacing(1),
        paddingBottom: 20,
    },
    headerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        marginTop: 15,
        marginLeft: 20,
        marginBottom: 5,
    },
    submit: {
        marginTop: 15,
        marginRight: 20,
        marginBottom: 5,
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
    },
    bodyBlock: {
        marginLeft: 20,
        marginRight: 20,
    },
    inputOpacity: {
        opacity: 1,
    },
});

interface ReduxProps {
    editSuccess: boolean;
    editData?: WalletLimitsData;
    walletLimits?: WalletLimitsData;
}

interface DispatchProps {
    fetchLimits: typeof walletLimitsGetFetch;
    editLimits: typeof walletLimitsEditFetch;
}

interface StyleProps extends WithStyles<typeof styles> {
    theme: Theme;
}

interface State {
    settings: WalletLimitsData;
    initialSettings: WalletLimitsData;
}

const defaultSettings = {
    deposit: [],
    withdraw: [],
};

type Props = DispatchProps & ReduxProps & StyleProps;

const PRECISION = 2;
const isValidValue = (value: string, precision: number) =>
    value.match(new RegExp(`^(?:[\\d-]*\\.?[\\d-]{0,${precision}}|[\\d-]*\\.[\\d-])$`));

class WalletLimitsContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            settings: defaultSettings,
            initialSettings: defaultSettings,
        };
    }

    public componentDidMount() {
        const { walletLimits } = this.props;

        if (walletLimits) {
            this.setState({
                settings: {...walletLimits},
                initialSettings: {...walletLimits},
            });
        }

        this.props.fetchLimits();
    }

    public UNSAFE_componentWillReceiveProps(nextProps: Props) {
        const { editSuccess, walletLimits } = this.props;

        if (nextProps.walletLimits && JSON.stringify(nextProps.walletLimits) !== JSON.stringify(walletLimits)) {
            this.setState({
                settings: {...nextProps.walletLimits},
                initialSettings: {...nextProps.walletLimits},
            });
        }

        if (nextProps.editSuccess && !editSuccess && nextProps.editData) {
            this.setState({initialSettings: {...nextProps.editData}});
        }
    }

    public render() {
        const { settings } = this.state;

        const settingsDataExists = !!(settings &&
            settings.deposit &&
            settings.withdraw &&
            settings.deposit.length &&
            settings.withdraw.length);

        return settingsDataExists ? this.renderContent() : null;
    }

    private renderContent() {
        const { classes } = this.props;
        const { settings } = this.state;

        return (
            <Paper className={classes.root}>
                <div className={classes.headerRow}>
                    <Typography variant="h5" className={classes.title}>Wallet limits</Typography>
                    <Button
                        onClick={this.handleEditWithdrawLimitsData}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Edit
                    </Button>
                </div>
                <div className={classes.body}>
                    {settings.deposit.map((item, index) => (index === 0 || index % 2 !== 0) && this.renderStep(index))}
                </div>
            </Paper>
        );
    }

    private renderStep = (step: number) => {
        const { classes } = this.props;
        const { settings } = this.state;

        let stepLabel = 0;

        switch (step) {
            case 1:
                stepLabel = 1;
                break;
            case 3:
                stepLabel = 2;
                break;
            case 5:
                stepLabel = 3;
                break;
            default:
                break;
        }

        return (
            <div className={classes.bodyBlock} key={stepLabel}>
                <Typography variant="h6">Step {stepLabel}</Typography>
                <TextField
                    id="first_step_deposit"
                    label="Max. Deposit"
                    placeholder="Max. Deposit"
                    fullWidth={true}
                    margin="normal"
                    type="text"
                    value={(settings.deposit[step] && settings.deposit[step].limit) || ''}
                    InputProps={{ classes: {input: classes.inputOpacity}}}
                    onChange={e => this.handleChangeSettings(e.target.value, 'deposit', step)}
                />
                <TextField
                    id="first_step_withdrawal"
                    label="Max. Withdrawal"
                    placeholder="Max. Withdrawal"
                    fullWidth={true}
                    margin="normal"
                    type="text"
                    value={(settings.withdraw[step] && settings.withdraw[step].limit) || ''}
                    InputProps={{ classes: {input: classes.inputOpacity}}}
                    onChange={e => this.handleChangeSettings(e.target.value, 'withdraw', step)}
                />
            </div>
        );
    };

    private handleChangeSettings = (value: string, type, step: number) => {
        const { settings } = this.state;
        const updatedType: WalletLimitsDataDeposit[] | WalletLimitsDataWithdraw[] = [];

        settings[type].map((item, index) => {
            const shouldUpdateCurrentLevel = index === step;
            const shouldUpdateNextLevel = (step % 2 !== 0) &&
                (index !== settings[type].length - 1) &&
                (index === step + 1);

            if (isValidValue(value, PRECISION) &&
                item.limit !== value &&
                (shouldUpdateCurrentLevel || shouldUpdateNextLevel)) {
                const updatedItem = {
                    ...item,
                    limit: value,
                };
                updatedType.push(updatedItem);
            } else {
                updatedType.push(item);
            }

            return item;
        });

        this.setState({
            settings: {
                ...settings,
                [type]: updatedType,
            },
        });
    };

    private handleEditWithdrawLimitsData = () => {
        const { initialSettings, settings } = this.state;

        const initialSettingsExists = !!(initialSettings &&
            initialSettings.deposit &&
            initialSettings.withdraw &&
            initialSettings.deposit.length &&
            initialSettings.withdraw.length);

        if (initialSettingsExists) {
            initialSettings.deposit.map((item, index) => {
                if (item.limit !== settings.deposit[index].limit) {
                    const dataToUpdate = {
                        ...settings.deposit[index],
                        type: 'deposit',
                    };
                    this.props.editLimits(dataToUpdate);
                }

                return item;
            });

            initialSettings.withdraw.map((item, index) => {
                if (item.limit !== settings.withdraw[index].limit) {
                    const dataToUpdate = {
                        ...settings.withdraw[index],
                        type: 'withdraw',
                    };
                    this.props.editLimits(dataToUpdate);
                }

                return item;
            });
        }
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, AppState> =
    (state: AppState): ReduxProps => ({
        editData: selectWalletLimitsEditData(state),
        editSuccess: selectWalletLimitsEditSuccess(state),
        walletLimits: selectWalletLimitsGetData(state),
    });

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> = dispatch => ({
    fetchLimits: () => dispatch(walletLimitsGetFetch()),
    editLimits: payload => dispatch(walletLimitsEditFetch(payload)),
});

const WalletLimitsContainerStyled = withStyles(styles, { withTheme: true })(WalletLimitsContainer);
//tslint:disable-next-line:no-any
export const WalletLimits = connect(mapStateToProps,mapDispatchToProps)(withRouter(WalletLimitsContainerStyled as any));
