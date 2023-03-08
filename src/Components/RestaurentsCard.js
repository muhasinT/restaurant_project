import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function RestaurentsCard({item}) {

  return (
    <Link to={`/restaurant/${item.id}`}>
      <Card >
        <Card.Img variant="top" src={item.photograph} className='fluid' />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Some quick example text to buil
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Link>

  )
}

export default RestaurentsCard