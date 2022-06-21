import React, { Component } from 'react';
import { 
    Form,
    Button,
    Container
 } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={ {width: '500px'} }>
                <h1 className='text-center'> Contact us </h1>
                <Form>
                    <Form.Group controllId='formBasicEmail'>
                        <Form.Label> Email address </Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                        <Form.Text>
                            We will never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controllId='formBasicPassword'>
                        <Form.Label> Example textarea </Form.Label>
                        <Form.Control as='textarea' rows='3' />
                    </Form.Group>

                    <Form.Group controllId='formBasicCheckBox'>
                        <Form.Check type='checkbox' label='Check me out' />
                        <Form.Control as='textarea' rows='3' />
                    </Form.Group>

                    <Button variant='primary' type='submit'> Submit </Button>

                </Form>
            </Container>
        )
    }
}