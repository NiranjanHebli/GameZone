import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function CardComp(props) {
  return (
    <Card className="w-100" shadow>
      <Row noGutters>
        <Col md={3}>
          <Card.Img src={props.image} />
        </Col>
        <Col md={9}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.text}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CardComp;
