import { combineEpics } from 'redux-observable';
import { accountDepositEpic, accountWithdrawStartEpic } from './accountEpic';

export const rootEpic = combineEpics(
  accountWithdrawStartEpic,
  accountDepositEpic
);
