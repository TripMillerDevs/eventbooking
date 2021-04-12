import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const EventView = (props) => {
  return (
    <Container className="event-container">
      <Row>
        <Col>
          <img className="img-event" src={`http://localhost:3000/${props.image}`}/>
        </Col>
        <Col>
          {props.text}
        </Col>
      </Row>
    </Container>
  )
}

export default EventView;