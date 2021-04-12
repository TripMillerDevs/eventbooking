import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { getEvents } from '../action';
import './styles/landpage.styles.scss';
import { Carousel } from 'react-bootstrap';
import EventView from './core/EventView';
// const EventView = lazy(() => import('./core/EventView'))
const LandPage = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(()=>{
    store.dispatch(getEvents());
  }, [])
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
         props.events.map((item, i) => 
          <Carousel.Item key={i}>
            <EventView image={item.image} text={item.text}/>
          </Carousel.Item>
        )
      }
    </Carousel>
  )
}

const mapStateToProps = state => ({
  events: state.event.events
})
export default connect ( mapStateToProps ) (LandPage);