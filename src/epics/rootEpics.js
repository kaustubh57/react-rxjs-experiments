import { combineEpics } from 'redux-observable';
import { accountDepositStartEpic, accountWithdrawStartEpic } from './accountEpic';

export const rootEpic = combineEpics(
  accountWithdrawStartEpic,
  accountDepositStartEpic
);
