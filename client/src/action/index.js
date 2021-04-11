import axios from 'axios';
import { ADD_EVENT, GET_EVENTS } from './action-type';

export const addEvent = (article) => {
  return (dispatch) => {
    axios.post('http://localhost:3000/v1/event', article)
    .then(res => {
      dispatch({
        type: ADD_EVENT,
        payload: article
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
}
export const getEvents = () => {
  return (dispatch) => {
    axios.getEvents('http://localhost:3000/v1/event')
    .then(res => {
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
