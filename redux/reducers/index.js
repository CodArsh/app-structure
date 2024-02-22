import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userData: userReducer,
  // Add other reducers here if needed
});

export default rootReducer;
