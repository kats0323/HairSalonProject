import React, { Component } from "react";
import 'antd/dist/antd.css';
import './carousel.css';
import './TopPage.css';
import Facebook from './facebook-square-brands.svg';
import Instagram from './instagram-brands.svg';
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';



class TopPage extends Component {
    render() {

        //  this is the hr line 
        const Line = ({ color }) => (
            <div class="style-line">
                <hr style={{ color: "green", border: "0.4px solid", width: "60%", }} />
            </div>
        );
        return (
            <div>
                <Line />
                <Carousel autoplay>
                    <div class="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/_image17.jpg'} alt="img1" />
                    </div>
                    <div class="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/_image21.jpg'} alt="img2" />
                    </div>
                    <div class="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/hair2.jpg'} alt="img3" />
                    </div>
                    <div class="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/_image11.jpg'} alt="img4" />
                    </div>
                </Carousel>

                <div class="style-home">
                    <h1>Style</h1>
                    <Row>
                        <Col>
                            <img class="style-showcase" src={process.env.PUBLIC_URL + '/img/temp.jpg'} alt="temp" />
                        </Col>
                        <Col>
                            <img class="style-showcase" src={process.env.PUBLIC_URL + '/img/temp.jpg'} alt="temp" />
                        </Col>
                        <Col>
                            <img class="style-showcase" src={process.env.PUBLIC_URL + '/img/temp.jpg'} alt="temp" />
                        </Col>
                        <Col>
                            <img class="style-showcase" src={process.env.PUBLIC_URL + '/img/temp.jpg'} alt="temp" />
                        </Col>
                    </Row>
                    <div class="button-top">
                        <Link to="/photos"> <Button>View More style</Button> </Link>
                    </div>
                </div>

                <div class="salon-top" />

                <Line />
                <div class="salon-info">
                    <h1>Salon Information</h1>
                    <i class="fab fa-instagram"></i>
                    <div class="info-icons">
                        <a href="https://www.facebook.com/mihoitostyle/" > <img src={Facebook} style={{ width: "3%", paddingRight: "10px" }} alt="facebook" /> </a>
                        <a href="https://www.instagram.com/mihostyle.sydney/" > <img src={Instagram} style={{ width: "3%", paddingLeft: "10px" }} alt="insta" /> </a>
                    </div>
                </div>
                <div class="salon-bottom" />
                <Line />
                <Line />



            </div>

        );
    };
}
export default TopPage;