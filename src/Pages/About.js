import React, { Component } from 'react';
import { 
    Container,
    Col,
    Nav, 
    Tab,
    Row
} from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-3'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'> Design </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'> Programming </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'> Frameworks </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey='first'>
                                    <img className='d-block w-100' src='https://cdn.dribbble.com/users/2355/screenshots/13753062/tokens_4x.png' />
                                    <p>
                                        pimpa boompa klemta ta rapap 
                                        boopa pimpa pa
                                        tuta tuta muta ra
                                        rata tuta tuta ta
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img className='d-block w-100' src='https://school11kgd.ru/upload/iblock/ff0/ff05a2d1b211e320941187cce43a203d.jpg' />
                                    <p>
                                        pimpa boompa klemta ta rapap 
                                        boopa pimpa pa
                                        tuta tuta muta ra
                                        rata tuta tuta ta
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img className='d-block w-100' src='https://i.pinimg.com/originals/c9/77/e9/c977e992604dbc266edbb19459565527.jpg' />
                                    <p>
                                        pimpa boompa klemta ta rapap 
                                        boopa pimpa pa
                                        tuta tuta muta ra
                                        rata tuta tuta ta
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}