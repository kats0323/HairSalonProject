import React, { Component } from "react";
import 'antd/dist/antd.css';
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
            <div className="title_top" >
                <Carousel autoplay>
                    <div className="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/slide00.jpg'} alt="img1" />
                    </div>
                    <div className="Carousel-box">
                        <img className="Carousel-photo" src={process.env.PUBLIC_URL + '/img/slide01.jpg'} alt="img2" />
                    </div>
                    <div className="Carousel-box">
                        <img class="Carousel-photo" src={process.env.PUBLIC_URL + '/img/slide06.jpg'} alt="img3" />
                    </div>
                    <div className="Carousel-box">
                        <img className="Carousel-photo" src={process.env.PUBLIC_URL + '/img/slide05.jpg'} alt="img4" />
                    </div>
                </Carousel>

                <div class="style-home">
                    <h1><span>Miho's</span> Style</h1>
                    <div className="style_position">
                        <img className="style-showcase" src={process.env.PUBLIC_URL + '/img/_image4.jpeg'} alt="temp" />

                        <img className="style-showcase" src={process.env.PUBLIC_URL + '/img/_image6.jpeg'} alt="temp" />

                        <img className="style-showcase" src={process.env.PUBLIC_URL + '/img/image30.jpeg'} alt="temp" />
                    </div>
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
                        <Icon className="icon" type="facebook" theme="filled" style={{ color: "green", fontSize: "40px", paddingRight: "10px" }} />
                        <Icon className="icon" type="instagram" theme="filled" style={{ color: "green", fontSize: "40px", paddingLeft: "10px" }} />

                    </div>
                </div>
                <div class="salon-bottom" />
            </div>

        );
    };
}
export default TopPage;