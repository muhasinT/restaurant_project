import React  from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Reviews from './Reviews';
import { useSelector } from 'react-redux'


function RestaurantDetails() {


  const restaurantDetails = useSelector(state => state.restaurantListData);

  const restaurants = restaurantDetails.restaurants


  console.log(restaurants);

  const { id } = useParams();

  const result = restaurants.find(item => item.id == id)

  return (
    <div >
      {
        result ?
          (
            <Container>
              {/* first row start */}
              <Row className="justify-content-md-center">
                <Col md={3}>
                  <Image src={result.photograph} alt={result.name} fluid />
                </Col>
                <Col md={3}>
                  <ListGroup.Item>
                    <h4>{result.name}</h4>
                    <h5>{result.neighborhood}</h5>
                    <h5>{result.address}</h5>
                    <h5>{result.cuisine_type}</h5>
                  </ListGroup.Item>
                </Col>
                <Col md={4}>
                  <ListGroup.Item>
                    <h4>Operating Hours :</h4>
                    <p>Monday:{result.operating_hours.Monday}</p>
                    <p>Tuesday:{result.operating_hours.Tuesday}</p>
                    <p>Wednesday:{result.operating_hours.Wednesday}</p>
                    <p>Thursday:{result.operating_hours.Thursday}</p>
                    <p>Friday:{result.operating_hours.Friday}</p>
                    <p>Saturday:{result.operating_hours.Saturday}</p>
                    <p>Sunday:{result.operating_hours.Sunday}</p>
                  </ListGroup.Item>
                </Col>
              </Row>
              {/* first row end */}

              {/* second row start */}

              <Row className="justify-content-md-center gy-3">
                <Reviews review_data={result.reviews} />
              </Row>

              {/* second row end */}
            </Container >
          )

          : null
      }
    </div>

  )
}

export default RestaurantDetails