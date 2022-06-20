import React, { Component } from 'react';
import { 
    Button,
    Container, 
    Form,
    FormControl, 
    Nav, 
    Navbar
} from 'react-bootstrap';
import logo from './logo.png';
import { BrowserRouter as 
    Router, 
    Routes, 
    Route, 
    Link 
} from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contacts from '../Pages/Contacts';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar sticky='top' collapseOnSelect expand='lg' bg='light' variant='light'>
                        <Container>
                            <Navbar.Brand href= '/'>
                                <img 
                                    src={logo}
                                    height = '40'
                                    width = '45'
                                    className='d-inline-block align-top'
                                    alt='logo'
                                />  {' '}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                            <Navbar.Collapse id='responsive-navbar-nav'>
                                <Nav className='me-auto'>
                                    <Nav.Link as={Link} to='/'> Home </Nav.Link>
                                    <Nav.Link as={Link} to='/about'> About </Nav.Link>
                                    <Nav.Link as={Link} to='/projects'> Projects </Nav.Link>
                                    <Nav.Link as={Link} to='/contacts'> Contacts </Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type='text'
                                        placeholder='Search'
                                        className='me-sm-2'
                                    />
                                </Form>
                                <Button variant='outline-primary'> Search </Button>
                            </Navbar.Collapse> 
                        </Container>
                    </Navbar>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/contacts' element={<Contacts />} />
                    </Routes>
                </Router>
            </div>     
        );
    }
}