import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import moveReducer from './moveReducer';

const rootReducer = combineReducers({
  adminSlice: adminReducer,
  moveSlice: moveReducer,
});

export default rootReducer;
