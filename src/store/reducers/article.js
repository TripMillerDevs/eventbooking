import { ADD_ARTICLE } from '../../action/action-type'

const intialState = {
  articles: []
};


function articleReducer (state = intialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_ARTICLE:
      state.articles.push(action.payload);
      break;
  }
  return state;
}

export default articleReducer;