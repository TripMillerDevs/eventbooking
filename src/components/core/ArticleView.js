import React from 'react';

const ArticleView = (props) => {
  return (
    <div>
      {props.image}-{props.text}
    </div>
  )
}

export default ArticleView;