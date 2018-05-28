import { combineReducers } from 'redux';
import notes from './notes';
import inputs from './inputs';
import statuses from './statuses';
 
export default combineReducers({
  notes,
  inputs,
  statuses
});
