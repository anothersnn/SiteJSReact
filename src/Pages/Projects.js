import React, { Component } from 'react';
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap'
import { List } from 'reactstrap';

export default class Projects extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md='9'>
                        <div class='d-flex align-items-center'>
                            <div class='flex-shrink-0' className='m-5'>
                                <img 
                                width={250}
                                height={250}
                                className='mr-3'
                                src='https://images.unsplash.com/photo-1655748403948-96f04e5f2cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' />
                            </div>
                            <div class='flex-grow-1 ms-3'>
                                <h5>Blog Post</h5>
                                <p>
                                dfghsgdfs;gmdsfgo;sdfgsdfgsdfgsd
                                </p>
                            </div>
                        </div>

                        <div class='d-flex align-items-center'>
                            <div class='flex-shrink-0' className='m-5'>
                                <img 
                                width={250}
                                height={250}
                                className='mr-3'
                                src='https://images.unsplash.com/photo-1655748403948-96f04e5f2cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' />
                            </div>
                            <div class='flex-grow-1 ms-3'>
                                <h5>Blog Post</h5>
                                <p>
                                dfghsgdfs;gmdsfgo;sdfgsdfgsdfgsd
                                </p>
                            </div>
                        </div>

                        <div class='d-flex align-items-center'>
                            <div class='flex-shrink-0' className='m-5'>
                                <img 
                                width={250}
                                height={250}
                                className='mr-3'
                                src='https://images.unsplash.com/photo-1655748403948-96f04e5f2cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' />
                            </div>
                            <div class='flex-grow-1 ms-3'>
                                <h5>Blog Post</h5>
                                <p>
                                dfghsgdfs;gmdsfgo;sdfgsdfgsdfgsd
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col md='3'>
                        <h5 className='text-center mt-5'> Categories </h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item> Html/Css </ListGroup.Item>
                                <ListGroup.Item> JavaScript </ListGroup.Item>
                                <ListGroup.Item> Python </ListGroup.Item>
                                <ListGroup.Item >C++ </ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className='mt-3' bg='light'>
                            <Card.Body>
                                <Card.Title> Side widget</Card.Title>
                                <Card.Text>
                                    gasdfas
                                    sadfas
                                    asdfasdfasdfasdfasd
                                    sfdasdfasdas
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        )
    }
}