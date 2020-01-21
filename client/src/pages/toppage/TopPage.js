import React, { Component } from "react";
import 'antd/dist/antd.css';
import './carousel.css';
import './TopPage.css';
import './topPage.respon.css'
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
import { Row, Col, Icon } from 'antd';
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
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/_image4.jpeg'} alt="img1" />
                    </div>
                    <div class="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/_image6.jpeg'} alt="img2" />
                    </div>
                    <div class="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/image30.jpeg'} alt="img3" />
                    </div>
                    <div class="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/_image3.jpeg'} alt="img4" />
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
                        <Icon type="facebook" theme="filled" style={{ color: "green", fontSize: "40px", paddingRight: "10px" }} />
                        <Icon type="instagram" theme="filled" style={{ color: "green", fontSize: "40px", paddingLeft: "10px" }} />

                    </div>
                </div>
                <div class="salon-bottom" />
                <Line />
            </div>

        );
    };
}
export default TopPage;