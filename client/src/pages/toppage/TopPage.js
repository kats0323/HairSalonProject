import React, { Component } from "react";
import 'antd/dist/antd.css';
import './carousel.css';
import './TopPage.css';

import { Carousel } from 'antd';



class TopPage extends Component {
    render() {
        return (
            <Carousel autoplay>
                <div class="Carousel-box">
                    <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/Caro1.png'} alt="img1" />
                </div>
                <div class="Carousel-box">
                    <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/Caro2.png'} alt="img2" />
                </div>
                <div class="Carousel-box">
                    <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/Caro3.png'} alt="img3" />
                </div>
                <div class="Carousel-box">
                    <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/Caro1.png'} alt="img4" />
                </div>
            </Carousel>
        );
    };
}
export default TopPage;