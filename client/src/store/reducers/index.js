import { combineReducers } from 'redux';
import eventReducer from './event'

export default combineReducers(
  {
    article: eventReducer
  }
) 