import React from 'react';
import { connect } from 'react-redux';


const EventList = (props) => {
  return (
    <div>
      {props.articles}
    </div>
  )
}

const mapStateToProps = state => ({
  articles: state.article.ariticles
})
export default connect (mapStateToProps) (EventList);