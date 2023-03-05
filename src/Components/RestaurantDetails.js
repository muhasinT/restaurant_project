import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function RestaurantDetails() {
  const [details, setDetails] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await fetch('/restaurants.json')
        .then(data => data.json())
        .then(data => setDetails(data.restaurants))
    }
    fetchData();
  })

  const { id } = useParams();

  const result = details.find(item => item.id == id)

  return (
    <div>
      {
        result ?
          (
            <Container>
              <Row>
                <Col md={4}>
                  <Image src={result.photograph} alt={result.name} fluid />
                </Col>
                <Col md={4}>
                  <ListGroup.Item>
                    <h4>{result.name}</h4>
                    <h5>{result.neighborhood}</h5>
                    <h5>{result.address}</h5>
                  </ListGroup.Item>
                </Col>
                
              <col></col>
              </Row>
            </Container >
          )

          : null
      }
    </div>

  )
}

export default RestaurantDetails