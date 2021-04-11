import axios from 'axios';
import { ADD_EVENT, GET_EVENTS } from './action-type';

export const addEvent = (event) => {
  return (dispatch) => {
    axios.post('http://localhost:3000/v1/event', event)
    .then(res => {
      dispatch({
        type: ADD_EVENT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
}
export const getEvents = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/v1/event')
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_EVENTS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
}
