import { React, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import RestaurentsCard from './RestaurentsCard';

function Home() {
  const [hotel, setHotel] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      await fetch('./restaurants.json')
        .then(data => data.json())
        .then(data => setHotel(data.restaurants)

        )
    }
    fetchData();

  }, [])

  console.log(hotel);
  return (
    <Row>
      {
        hotel.map(data => (
          <Col sm={6} md={4} lg={3} xl={2}  key={data.id}>
            <RestaurentsCard item={data} />
          </Col>
        ))

      }
    </Row>
  )
}

export default Home