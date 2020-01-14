import React, { Component } from "react";
import 'antd/dist/antd.css';
import './carousel.css';
import './TopPage.css';

import { Carousel } from 'antd';



class TopPage extends Component {
    render() {
        
        //  this is the hr line 
         const Line = ({ color }) => (
            <hr style={{ color: "gray",border:"0.5px solid", width:"80%",}} /> 
         );
        return (
            <div>
                <Carousel autoplay>
                    <div class="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/hair1.jpg'} alt="img1" />
                    </div>
                    <div class="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/hair2.jpg'} alt="img2" />
                    </div>
                    <div class="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/hair3.jpg'} alt="img3" />
                    </div>
                    <div class="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/Caro1.png'} alt="img4" />
                    </div>
                </Carousel>

                <div class="style-home">
                    <h2>Style</h2>
                    <div class="style-line">
                        <Line />
                    </div>
                </div>
            </div>

        );
    };
}
export default TopPage;