import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { getEvents } from '../action';
const EventView = lazy(() => import('./core/EventView'))
const EventList = (props) => {
  useEffect(()=>{
    store.dispatch(getEvents());
  }, [])
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {
          props.events.map((item, i) => 
            <EventView image={item.image} text={item.text} key={i}/>
          )
        }
      </Suspense>
    </div>
  )
}

const mapStateToProps = state => ({
  events: state.event.events
})
export default connect ( mapStateToProps ) (EventList);