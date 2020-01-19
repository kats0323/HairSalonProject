import React, { Component } from "react";
import 'antd/dist/antd.css';
import './carousel.css';
import './TopPage.css';
import { BrowserRouter, Link } from "react-router-dom";
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';




class TopPage extends Component {
    render() {
        
        //  this is the hr line 
         const Line = ({ color }) => (
             <div class="style-line">
                <hr style={{ color: "black",border:"0.8px solid", width:"61%",}} /> 
            </div>
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
                        
                    </div>
                    <Line />
                <div class="salon-bottom" />
                

            </div>

        );
    };
}
export default TopPage;