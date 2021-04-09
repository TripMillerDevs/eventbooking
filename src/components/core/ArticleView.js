import React from 'react';

const ArticleView = (props) => {
  return (
    <div>
      <img src={props.img}/>
      <div>{ props.text }</div>
    </div>
  )
}
export default ArticleView;