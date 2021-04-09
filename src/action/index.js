import { ADD_ARTICLE } from './action-type';

export const addArticle = (article) => {
  return (dispatch) => {
    dispatch({
      type: ADD_ARTICLE,
      payload: article
    })
  }
}