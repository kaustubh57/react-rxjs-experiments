import { createReducer } from './reducerUtils';
import { DEPOSIT, DEPOSIT_END, WITHDRAW } from '../actions/actionConstants';

const initialState = {
  checking: 100,
  savings: 100
};

function withdrawAmount(state = initialState, action) {
  console.log('### WITHDRAW... from reducer...');
  return {...state, [action.account]: state[action.account] - parseFloat(action.amount)};
}

function depositAmount(state = initialState, action) {
  console.log('### DEPOSIT... from reducer...');
  return {...state, [action.account]: state[action.account] + parseFloat(action.amount)};
}

function depositEnd(state = initialState, action) {
  console.log('### Deposit ended... from reducer...');
  return {...state};
}


export default createReducer(initialState,
  {
    [WITHDRAW]: withdrawAmount,
    [DEPOSIT]: depositAmount,
    [DEPOSIT_END]: depositEnd
  }
);
