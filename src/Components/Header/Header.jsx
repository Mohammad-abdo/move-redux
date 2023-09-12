import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../store/language';

function Header() {
  const language= useSelector((state)=>state.language.language)
  const dispatch = useDispatch()

const toggleLanguage=()=>{
     dispatch(changeLanguage((language=='en')?'ar':'en'))
}
  return (
   <div className="container-fluid fixed-top bg-primary">
     <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex align-items-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/user" className='text-white'>user</Nav.Link>
            <Nav.Link href="/movieList" className='text-white'>Movie</Nav.Link>
            <Nav.Link href="/login" className='text-white'>login</Nav.Link>
         
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
            <a  style={{cursor:"pointer",color:"white",textDecoration:"none"}} 
            className='mx-2 fw-bold'
            onClick={()=>{toggleLanguage()}} >
              
              languag
             <span className="mx-1 text-dark fs-5">( {language} ) </span>
              </a>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  );
}

export default Header;

