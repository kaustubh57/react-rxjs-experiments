import { delay, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { watch } from 'rxjs-watcher';

import { DEPOSIT, DEPOSIT_START, WITHDRAW, WITHDRAW_START } from '../actions/actionConstants';

export const accountWithdrawStartEpic = action$ =>
  action$.pipe(
    ofType(WITHDRAW_START),
    watch("WITHDRAW_START", 30),
    // map(withdrawAmount)
    delay(2000), // Asynchronously wait 1000ms then continue
    tap((action) => console.log('### EPIC ' + WITHDRAW_START + ' ### ' + JSON.stringify(action))),
    // mergeMap((action) => ),
    //mapTo(value => Object.assign({}, {type: DEPOSIT, payload: {amount: 1, account: 'checking'}})),
    switchMap(action => of({type: WITHDRAW, payload: {...action.payload}})),
    //mapTo({type: WITHDRAW, payload: {amount: 1, account: 'checking'}}),
    watch("WITHDRAW", 30),
  );

export const accountDepositStartEpic = action$ =>
  action$.pipe(
    ofType(DEPOSIT_START),
    watch("DEPOSIT_START", 30),
    delay(2000), // Asynchronously wait 1000ms then continue
    tap((action) => console.log('### EPIC ' + DEPOSIT_START + ' ### ' + JSON.stringify(action))),
    //mapTo({type: DEPOSIT_END}),
    switchMap(action => of({type: DEPOSIT, payload: {...action.payload}})),
    watch("DEPOSIT", 30),
  );
