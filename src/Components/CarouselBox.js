import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import stPhotoForHome from '../Assets/1stPhotoForHome.jpg';
import ndPhotoForHome from '../Assets/2ndPhotoForHome.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ stPhotoForHome }
                        alt='FirstPhoto'
                    />
                    <Carousel.Caption>
                        <h3> First Photo for Site </h3>
                        <p> Hello everyone, 
                            I glad to see you </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ ndPhotoForHome }
                        alt='SecondPhoto'
                    />
                    <Carousel.Caption>
                        <h3> Second Photo for Site </h3>
                        <p> Do you have any questions? </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ stPhotoForHome }
                        alt='FirstPhoto'
                    />
                    <Carousel.Caption>
                        <h3> First Photo for Site </h3>
                        <p> Hello everyone, i glad to see you </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        )
    }
}