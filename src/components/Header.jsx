import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className='bg-success'> <Navbar className="bg-body-warning">
    <Container className='bg-warning'>
      <Navbar.Brand href="#home">
      <i className="fa-solid fa-users" style={{color: "#00000",}} />
       {' '}
        Employee Management
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header