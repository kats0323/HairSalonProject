import React, { Component } from "react";
import 'antd/dist/antd.css';
import './carousel.css';
import './TopPage.css';
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
import { Row, Col, Icon } from 'antd';
import { Button } from 'antd';



class TopPage extends Component {
    render() {

        //  this is the hr line 
        const Line = ({ color }) => (
            <div className="style-line">
                <hr style={{ color: "green", border: "0.4px solid", width: "60%" }} />
            </div>
        );
        return (
            <div>
                <Carousel autoplay>
                    <div className="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/1slide.jpg'} alt="img1" />
                    </div>
                    <div className="Carousel-box">
                        <img className="Carousel-photo" src={process.env.PUBLIC_URL + '/img/2slide.jpg'} alt="img2" />
                    </div>
                    <div className="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/3slide.jpeg'} alt="img3" />
                    </div>
                    <div className="Carousel-box">
                        <img className="Carousel-photo" src={process.env.PUBLIC_URL + '/img/4slide.jpg'} alt="img4" />
                    </div>
                </Carousel>

                <div class="style-home">
                    <h1>Miho's Style</h1>
                    <Row>
                        <Col>
                            <img className="style-showcase" src={process.env.PUBLIC_URL + '/img/_image4.jpeg'} alt="temp" />
                        </Col>
                        <Col>
                            <img className="style-showcase" src={process.env.PUBLIC_URL + '/img/_image6.jpeg'} alt="temp" />
                        </Col>
                        <Col>
                            <img className="style-showcase" src={process.env.PUBLIC_URL + '/img/image30.jpeg'} alt="temp" />
                        </Col>
                    </Row>
                    <div class="button-top">
                        <Link to="/photos"> <Button>View More Miho's Style</Button> </Link>
                    </div>
                </div>

                <div class="salon-top" />

                <Line />
                <div class="salon-info">
                    <h1>Salon Information</h1>
                    <i class="fab fa-instagram"></i>
                    <div class="info-icons">
                        <Icon type="facebook" theme="filled" style={{ color: "green", fontSize: "40px", paddingRight: "10px" }} />
                        <Icon type="instagram" theme="filled" style={{ color: "green", fontSize: "40px", paddingLeft: "10px" }} />

                    </div>
                </div>
                <div class="salon-bottom" />
            </div>

        );
    };
}
export default TopPage;