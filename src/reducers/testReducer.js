import { createReducer } from './reducerUtils';

const initialState = {
  data: 42
};

function testReducer(state = initialState, action) {
  return state;
}

export default createReducer(initialState,
  {}
);
