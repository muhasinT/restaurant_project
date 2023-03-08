import React from 'react'
import { Row, Col, Container, ListGroup } from 'react-bootstrap'

function Reviews({ review_data }) {
    return (
        <div>

            <Container>
                {
                    review_data.map((review) => (
                        <Row key={review.name}>
                            <Col md={12}>
                                <ListGroup>
                                    <ListGroup.Item ><h5>{review.name}</h5></ListGroup.Item>
                                    <ListGroup.Item ><h5>{review.date}</h5></ListGroup.Item>
                                    <ListGroup.Item ><h5>{review.rating}</h5></ListGroup.Item>
                                    <ListGroup.Item ><p>{review.comments}</p></ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    ))
                }

            </Container>
                         
        </div>
    )
}

export default Reviews