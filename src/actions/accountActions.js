import { DEPOSIT_START, WITHDRAW_START } from './actionConstants';

export const withdrawStartAmount = (payload) => dispatch => {
  console.log('### withdrawStartAmount action');
  dispatch({
    type: WITHDRAW_START,
    payload: payload
  })
};

export const depositStartAmount = (payload) => dispatch => {
  console.log('### depositStartAmount action');
  dispatch({
    type: DEPOSIT_START,
    payload: payload
  })
};
