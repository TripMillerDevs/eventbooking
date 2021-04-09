import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
// import ArticleView from './core/ArticleView'
const ArticleView = lazy(() => import('./core/ArticleView'))
const EventList = (props) => {
  console.log(props);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {
          props.articles.map((item, i) => 
            <ArticleView image={item.image} text={item.text} key={i}/>
          )
        }
        
      </Suspense>
    </div>
  )
}

const mapStateToProps = state => ({
  articles: state.article.articles
})
export default connect ( mapStateToProps) (EventList);