import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import Carousel from "react-multi-carousel";
import store from '../store';
import { getEvents } from '../action';
import './styles/landpage.styles.scss';
const EventView = lazy(() => import('./core/EventView'))
const LandPage = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  useEffect(()=>{
    store.dispatch(getEvents());
  }, [])
  return (
    <Carousel 
      ssr
      partialVisbile
      deviceType="desktop"
      itemClass="image-item"
      responsive={responsive}
    >
      <Suspense fallback={<div>Loading...</div>}>
        {
          props.events.slice(0,2).map((item, i) => 
            <EventView image={item.image} text={item.text} key={i}/>
          )
        }
      </Suspense>
    </Carousel>
  )
}

const mapStateToProps = state => ({
  events: state.event.events
})
export default connect ( mapStateToProps ) (LandPage);