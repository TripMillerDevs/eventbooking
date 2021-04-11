import { ADD_EVENT, GET_EVENTS } from '../../action/action-type'

const intialState = {
  articles: []
};


function articleReducer (state = intialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      return {
        articles: [
          ...state.articles,
          action.payload
        ]
      }
      break;
    case GET_EVENTS:
      return {
        articles: action.payload
      }
      break;
    default:
      return state;
  }
}

export default articleReducer;