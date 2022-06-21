import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import stPhotoForHome from '../Assets/1stPhotoForHome.jpg';
import ndPhotoForHome from '../Assets/2ndPhotoForHome.jpg';
import rdPhotoForHome from '../Assets/3rdPhotoForHome.jpg';

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
                        <h3> Hey! I Am </h3>
                        <h3> Stephan NikitiN </h3>
                        <p> Also known as anotherSNN </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ ndPhotoForHome }
                        alt='SecondPhoto'
                    />
                    <Carousel.Caption>
                        <h3> 2nd year student of MTUCI </h3>
                        <p> An aspiring developer and designer </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ rdPhotoForHome }
                        alt='ThirdPhoto'
                    />
                    <Carousel.Caption>
                        <h3> Contact </h3>
                        <p> ar2d1@yandex.ru </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        )
    }
}