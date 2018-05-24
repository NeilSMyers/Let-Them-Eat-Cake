import { combineReducers } from 'redux';
import cakesReducer from './cakes';

const rootReducer = combineReducers({
  cakes: cakesReducer
});

export default rootReducer;