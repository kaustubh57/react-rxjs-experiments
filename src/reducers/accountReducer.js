import { createReducer } from './reducerUtils';
import { DEPOSIT, WITHDRAW } from '../actions/actionConstants';

const initialState = {
  checking: 100,
  savings: 100
};

function withdrawAmount(state = initialState, action) {
  return {...state, [action.account]: state[action.account] - parseFloat(action.amount)};
}

function depositAmount(state = initialState, action) {
  return {...state, [action.account]: state[action.account] + parseFloat(action.amount)};
}


export default createReducer(initialState,
  {
    [WITHDRAW]: withdrawAmount,
    [DEPOSIT]: depositAmount
  }
);
