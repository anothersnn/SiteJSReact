import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { 
    Container,
    Card,
    CardDeck,
    Button,
    Row 
} from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />

                <Container>
                    <Card style={{ width: '18rem'}}>
                        <Row>
                            <Card.Img variant='top' 
                            src = 'https://images.unsplash.com/photo-1655636006098-ec45fd6ceb6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                            />
                            <Card.Body>
                                <Card.Title> Developers </Card.Title>
                                <Card.Text>
                                    pimpa poompa bemmpa cool
                                </Card.Text>
                                <Button variant='primary'> About team </Button>
                            </Card.Body>
                        </Row>
                    </Card>

                    <Card style={{ width: '18rem'}}>
                        <Row>
                            <Card.Img variant='top' 
                            src = 'https://images.unsplash.com/photo-1655636006098-ec45fd6ceb6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                            />
                            <Card.Body>
                                <Card.Title> Developers </Card.Title>
                                <Card.Text>
                                    pimpa poompa bemmpa cool
                                </Card.Text>
                                <Button variant='primary'> About team </Button>
                            </Card.Body>
                        </Row>
                    </Card>

                    <Card style={{ width: '18rem'}}>
                        <Row>
                            <Card.Img variant='top' 
                            src = 'https://images.unsplash.com/photo-1655636006098-ec45fd6ceb6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                            />
                            <Card.Body>
                                <Card.Title> Developers </Card.Title>
                                <Card.Text>
                                    pimpa poompa bemmpa cool
                                </Card.Text>
                                <Button variant='primary'> About team </Button>
                            </Card.Body>
                        </Row>
                    </Card>
                </Container>
            </>
        )
    }
}