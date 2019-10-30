import { DEPOSIT, WITHDRAW } from './actionConstants';

export const withdrawAmount = (payload) => dispatch => {
  dispatch({
    type: WITHDRAW,
    payload: payload
  })
};

export const depositAmount = (payload) => dispatch => {
  dispatch({
    type: DEPOSIT,
    payload: payload
  })
};
