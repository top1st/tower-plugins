export interface WalletLimitsDataDeposit {
    id?: number;
    level: number;
    period: number;
    limit: string;
}

export interface WalletLimitsDataWithdraw {
    id?: number;
    currency: string;
    level: number;
    period: number;
    limit: string;
}

export interface WalletLimitsData {
    deposit: WalletLimitsDataDeposit[];
    withdraw: WalletLimitsDataWithdraw[];
}
