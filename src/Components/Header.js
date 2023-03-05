import React from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';
import{Link} from 'react-router-dom'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to ="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/features">Features</Nav.Link>
        <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header