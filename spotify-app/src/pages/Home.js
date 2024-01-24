import React from 'react'
import Main from '../components/Main';
import NavbarBottom from '../components/NavbarBottom';
import Sidebar from '../components/Sidebar';
import { Container, Row } from 'react-bootstrap';
export default function 
() {
  return (
    <>
    <Container fluid>
        <Row>
            <Sidebar />
            <Main />
        </Row>
    </Container>
    
    <NavbarBottom />
        
    </>
  )
}
