import { combineReducers } from 'redux';
import testReducer from './testReducer';
import accountReducer from './accountReducer';

const rootReducer = combineReducers({
  test: testReducer,
  account: accountReducer
});

export default rootReducer;
