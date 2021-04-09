import { ADD_ARTICLE } from '../../action/action-type'

const intialState = {
  articles: []
};


function articleReducer (state = intialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        articles: [
          ...state.articles,
          action.payload
        ]
      }
      break;
    default:
      return state;
  }
}

export default articleReducer;