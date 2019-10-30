import { createSelector } from 'reselect';

export const account = state => state.account;
export const checkingAccount = state => state.account.checking;
export const savingsAccount = state => state.account.savings;

export const selectAccount = createSelector(
  account,
  account => account
);

export const selectCheckingAccount = createSelector(
  checkingAccount,
  checkingAccount => checkingAccount
);

export const selectSavingsAccount = createSelector(
  savingsAccount,
  savingsAccount => savingsAccount
);
