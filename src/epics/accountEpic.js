import { delay, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ofType } from 'redux-observable';

import { DEPOSIT, DEPOSIT_START, WITHDRAW, WITHDRAW_START } from '../actions/actionConstants';

export const accountWithdrawStartEpic = action$ =>
  action$.pipe(
    ofType(WITHDRAW_START),
    // map(withdrawAmount)
    delay(2000), // Asynchronously wait 1000ms then continue
    tap((val) => console.log('### EPIC ' + WITHDRAW_START + ' ### ' + JSON.stringify(val))),
    // mergeMap((action) => )
    //mapTo(value => Object.assign({}, {type: DEPOSIT, payload: {amount: 1, account: 'checking'}}))
    switchMap(action => of({type: WITHDRAW, payload: {...action.payload}}))
    //mapTo({type: WITHDRAW, payload: {amount: 1, account: 'checking'}})
  );

export const accountDepositEpic = action$ =>
  action$.pipe(
    ofType(DEPOSIT_START),
    delay(2000), // Asynchronously wait 1000ms then continue
    tap((val) => console.log('### EPIC ' + DEPOSIT_START + ' ### ' + JSON.stringify(val))),
    //mapTo({type: DEPOSIT_END})
    switchMap(action => of({type: DEPOSIT, payload: {...action.payload}}))
  );
