import React, { Component } from 'react';
import axios from 'axios';
import './contact.css'
import Footer from '../partials/_footer'
import { Row, Col, Icon } from 'antd';



const Sline = ({ color }) => (
    <div className="style-line">
        <hr style={{ color: "green", border: "0.4px solid", width: "60%", }} />
    </div>
);

const ContactFunction = props => (

    <div>


        {
            props.language === "Japanese" ? (
                <div>
                    <div className="contact_table">

                        <div className="tel_table" style={{ fontSize: "25px", textAlign: "center" }}>
                            <Row className="test" style={{ paddingTop: "10px" }}>
                                <p style={{ color: "silver" }}>TEL:</p>
                                <div style={{ color: "green", fontSize: "30px" }}>{props.contacts.phone_number}</div>
                            </Row>
                        </div>


                        <div className="border_table" style={{ color: "green", border: "0.5px solid", width: "100%", textAlign: "center" }}></div>


                        <div className="line_table" style={{ fontSize: "25px", textAlign: "center" }}>
                            <Row className="test" style={{ paddingTop: "10px" }}>
                                <p style={{ float: "left", color: "silver", paddingRight: "30px" }}>Line ID:</p>
                                <div style={{ color: "green", fontSize: "30px" }}>{props.contacts.line_id}</div>
                            </Row>
                        </div>

                        <div className="border_table" style={{ color: "green", border: "0.5px solid", width: "100%", textAlign: "center" }}></div>

                        <p style={{ color: "bloack" }}><span style={{ color: "green", fontSize: "25px", paddingTop: "5px" }}>* </span>{props.contacts.contact_info_1_ja}</p>

                    </div>
                    <div className="contact_sns" style={{ textAlign: "center" }}>
                        <p style={{ fontSize: "20px", paddingTop: "5px", color: "silver" }}>Check <span style={{ color: "green" }}>Miho's Style</span> SNS</p>
                        <Row style={{ paddingTop: "10px" }}>

                            <Col style={{ paddingTop: "5px", color: "green !important" }}>
                                <a href={props.contacts.facebook}><Icon type="facebook" theme="filled" style={{ fontSize: "3rem", color: "green" }} /></a>
                            </Col>
                            <Col style={{ paddingTop: "5px", color: "green" }}>
                                <a href={props.contacts.instagram}><Icon type="instagram" theme="filled" style={{ fontSize: "3rem", color: "green" }} /></a>
                            </Col>
                        </Row>
                    </div>
                    <div className="openingHours" style={{ textAlign: "center", paddingTop: "10px" }}>
                        <div className="border_table" style={{ color: "green", border: "0.5px solid", width: "100%", textAlign: "center" }}></div>
                        <h2 style={{ paddingTop: "15px" }}>Opening Hours</h2>
                        {props.contacts.opening_hors_mon && <h3 style={{ paddingTop: "5px" }} > {props.contacts.opening_hors_mon}</h3>}
                        {props.contacts.opening_hors_tue && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_tue}</h3>}
                        {props.contacts.opening_hors_wed && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_wed}</h3>}
                        {props.contacts.opening_hors_thu && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_thu}</h3>}
                        {props.contacts.opening_hors_fri && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_fri}</h3>}
                        {props.contacts.opening_hors_sat && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_sat}</h3>}
                        {props.contacts.opening_hors_sun && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_sun}</h3>}
                        <p style={{ color: "bloack" }}><span style={{ color: "green", fontSize: "25px", paddingTop: "5px" }}>* </span> {props.contacts.contact_info_2_ja}</p>
                        {/* extrainfo is blank now */}
                        {props.contacts.contact_extra_info_ja && <p style={{ color: "black", paddingTop: "5px" }}>{props.contacts.contact_extra_info_ja}</p>}
                        <div className="border_table" style={{ color: "black", border: "1px solid", width: "100%", textAlign: "center" }}></div>
                    </div>
                </div>

            ) : (
                    <div>
                        <div className="contact_table">

                            <div className="tel_table" style={{ fontSize: "25px", textAlign: "center" }}>
                                <Row style={{ paddingTop: "10px" }}>
                                    <p style={{ color: "#7d7d7d" }}>TEL:</p>
                                    <div style={{ color: "green", fontSize: "30px" }}>{props.contacts.phone_number}</div>
                                </Row>
                            </div>


                            <div className="border_table" style={{ color: "green", border: "0.5px solid", width: "100%", textAlign: "center" }}></div>


                            <div className="line_table" style={{ fontSize: "25px", textAlign: "center" }}>
                                <Row style={{ paddingTop: "10px" }}>
                                    <p style={{ float: "left", color: "#7d7d7d", paddingRight: "30px" }}>Line ID:</p>
                                    <div style={{ color: "green", fontSize: "30px" }}>{props.contacts.line_id}</div>
                                </Row>
                            </div>

                            <div className="border_table" style={{ color: "green", border: "0.5px solid", width: "100%", textAlign: "center" }}></div>

                            <p style={{ color: "bloack" }}><span style={{ color: "green", fontSize: "25px", paddingTop: "5px" }}>* </span>{props.contacts.contact_info_1_en}</p>

                        </div>
                        <div className="contact_sns" style={{ textAlign: "center" }}>
                            <p style={{ fontSize: "20px", paddingTop: "5px", color: "#7d7d7d" }}>Check <span style={{ color: "green" }}>Miho's Style</span> SNS</p>
                            <Row style={{ paddingTop: "10px" }}>

                                <Col style={{ paddingTop: "5px", color: "green !important" }}>
                                    <a href={props.contacts.facebook}><Icon type="facebook" theme="filled" className="facebookIcon" style={{ fontSize: "3rem", color: "green" }} /></a>
                                </Col>
                                <Col style={{ paddingTop: "5px", color: "green" }}>
                                    <a href={props.contacts.instagram}><Icon className="instaIcon" type="instagram" theme="filled" style={{ fontSize: "3rem", color: "green" }} /></a>
                                </Col>
                            </Row>
                        </div>
                        <div className="openingHours" style={{ textAlign: "center", paddingTop: "10px" }}>
                            <div className="border_table" style={{ color: "green", border: "0.5px solid", width: "100%", textAlign: "center" }}></div>
                            <h2 style={{ paddingTop: "15px" }}>Opening Hours</h2>
                            {props.contacts.opening_hors_mon && <h3 style={{ paddingTop: "5px" }} > {props.contacts.opening_hors_mon}</h3>}
                            {props.contacts.opening_hors_tue && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_tue}</h3>}
                            {props.contacts.opening_hors_wed && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_wed}</h3>}
                            {props.contacts.opening_hors_thu && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_thu}</h3>}
                            {props.contacts.opening_hors_fri && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_fri}</h3>}
                            {props.contacts.opening_hors_sat && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_sat}</h3>}
                            {props.contacts.opening_hors_sun && <h3 style={{ paddingTop: "5px" }}>{props.contacts.opening_hors_sun}</h3>}
                            <p style={{ color: "bloack" }}><span style={{ color: "green", fontSize: "25px", paddingTop: "5px" }}>* </span> {props.contacts.contact_info_2_en}</p>
                            {/* extrainfo is blank now */}
                            {props.contacts.contact_extra_info_en && <p style={{ color: "black", paddingTop: "5px" }}>{props.contacts.contact_extra_info_en}</p>}
                            <div className="border_table" style={{ color: "black", border: "1px solid", width: "100%", textAlign: "center" }}></div>
                        </div>
                    </div >

                )
        }


    </div>
)


const LocationFunction = props => (
    <div>


        {
            props.language === "Japanese" ? (

                <div>
                    <h3 style={{ textAlign: "center", color: "green", paddingTop: "15px" }}>Address</h3>

                    <div style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }} >{props.locations.street} </div>
                    <div style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }} >{props.locations.suburb} </div>
                    <div style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }} >{props.locations.state} {props.locations.post_code}</div>
                    <Row>
                        <div className="img_contact">
                            <Col> <img src={props.locations.shop_photo1} alt="shopphoto" style={{ width: "400px", height: "400px" }} /></Col>
                            <Col>
                                <iframe src={props.locations.google} title="googlemap" style={{ width: "400px", height: "400px" }} ></iframe>
                            </Col>
                        </div>
                    </Row>
                    <p style={{ color: "bloack" }}><span style={{ color: "green", fontSize: "25px", paddingTop: "5px" }}>* </span>  {props.locations.shop_info_1_ja}</p>
                    <p style={{ color: "bloack" }}><span style={{ color: "green", fontSize: "25px", paddingTop: "5px" }}>* </span>  {props.locations.shop_info_2_ja}</p>

                    {props.locations.shop_extra_info_ja && <p style={{ color: "black", paddingTop: "5px" }}>{props.locations.shop_extra_info_ja}</p>}

                </div>

            ) : (

                    <div>
                        <h3 style={{ textAlign: "center", color: "green", paddingTop: "15px" }}>Address</h3>

                        <div style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }} >{props.locations.street} </div>
                        <div style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }} >{props.locations.suburb} </div>
                        <div style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }} >{props.locations.state} {props.locations.post_code}</div>
                        <Row>
                            <Col> <img src={props.locations.shop_photo1} alt="shopphoto" style={{ width: "400px", height: "400px" }} /></Col>
                            <Col>
                                <iframe src={props.locations.google} title="googlemap" style={{ width: "400px", height: "400px" }} ></iframe>
                            </Col>
                        </Row>
                        <p style={{ color: "bloack" }}><span style={{ color: "green", fontSize: "25px", paddingTop: "5px" }}>* </span>  {props.locations.shop_info_1_en}</p>
                        <p style={{ color: "bloack" }}><span style={{ color: "green", fontSize: "25px", paddingTop: "5px" }}>* </span>  {props.locations.shop_info_2_en}</p>

                        {props.locations.shop_extra_info_en && <p style={{ color: "black", paddingTop: "5px" }}>{props.locations.shop_extra_info_en}</p>}

                    </div>


                )}
    </div>
)


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            locations: []
        };
    }

    componentDidMount() {
        axios.get('/contacts/')
            .then(response => {
                this.setState({ contacts: response.data })
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get('/locations/')
            .then(response => {
                this.setState({ locations: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    contactList() {
        console.log(this.state.contacts)
        return this.state.contacts.map(currentcontact => {
            return <ContactFunction contacts={currentcontact} key={currentcontact._id} language={this.props.language} />;
        })
    }

    locationList() {
        console.log(this.state.locations)
        return this.state.locations.map(currentlocation => {
            return <LocationFunction locations={currentlocation} key={currentlocation._id} language={this.props.language} />;
        })
    }

    render() {

        return (
            <div>
                <div className="contactPad">
                    <h1 style={{ textAlign: "center" }}>Contact</h1>


                    {this.contactList()}
                    <h1 style={{ textAlign: "center", paddingTop: "15px" }}>Location</h1>
                    {this.locationList()}
                </div>

                <Footer />
            </div>
        )
    }
}