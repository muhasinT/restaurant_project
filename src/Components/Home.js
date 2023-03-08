import { React, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import RestaurentsCard from './RestaurentsCard';
import { restaurantList } from '../Actions/restaurantAction'
import { useDispatch, useSelector } from 'react-redux'

function Home() {

  const dispatch = useDispatch();

  const restaurantReducer = useSelector(state => state.restaurantListData);      // from store 
  console.log(restaurantReducer);
  const { myList } = restaurantReducer


  useEffect(() => {

    dispatch(restaurantList())

  }, [])


  return (
    <Row>
      {
        myList.map(data => (
          <Col  md={6} lg={3} xl={3} key={data.id}>
            <RestaurentsCard item={data} />
          </Col>
        ))

      }
    </Row>
  )
}

export default Home