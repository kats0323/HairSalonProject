import React, { Component } from 'react';
import axios from 'axios';
import './contact.css'
import Footer from '../partials/_footer'
import { Row, Col, Icon } from 'antd';

const ContactFunction = props => (

    <div>
        {props.language === "Japanese" ? (
            <div>
                <h4>phone_number</h4>
                {props.contacts.phone_number}
                <h4>line_id</h4>
                {props.contacts.line_id}
                <h4>facebook</h4>
                {props.contacts.facebook}
                <h4>instagram</h4>
                {props.contacts.instagram}
                <h4>opening_hors_mon</h4>
                {props.contacts.opening_hors_mon}
                <h4>opening_hors_tue</h4>
                {props.contacts.opening_hors_tue}
                <h4>opening_hors_wed</h4>
                {props.contacts.opening_hors_wed}
                <h4>opening_hors_thu</h4>
                {props.contacts.opening_hors_thu}
                <h4>opening_hors_fri</h4>
                {props.contacts.opening_hors_fri}
                <h4>opening_hors_sat</h4>
                {props.contacts.opening_hors_sat}
                <h4>opening_hors_sun</h4>
                {props.contacts.opening_hors_sun}
                <h4>contact_info_1_ja</h4>
                {props.contacts.contact_info_ja}
                <h4>contact_info_2_ja</h4>
                {props.contacts.contact_info_ja}
                <h4>contact_extra_info_ja</h4>
                {props.contacts.contact_extra_info_ja}
            </div>
        ) : (
                <div>
                    <Row>
                            <Col>
                                <h4>phone {props.contacts.phone_number}</h4>
                                <h4>line {props.contacts.line_id}</h4>
                                <a href={props.contacts.facebook}><Icon type="facebook" style={{fontSize:"4rem"}} /></a>
                                <a href={props.contacts.instagram}><Icon type="instagram" style={{fontSize:"4rem"}} /></a>
                                <h5>{props.contacts.contact_info_en}</h5>
                                <h5>{props.contacts.contact_info_en}</h5>
                                <h5>{props.contacts.contact_extra_info_en}</h5>
                            </Col>
                            <Col>             
                                <h5>{props.contacts.opening_hors_mon}</h5>
                                <h5>{props.contacts.opening_hors_tue}</h5>
                                <h5>{props.contacts.opening_hors_wed}</h5>
                                <h5>{props.contacts.opening_hors_thu}</h5>
                                <h5>{props.contacts.opening_hors_fri}</h5>
                                <h5>{props.contacts.opening_hors_sat}</h5>
                                <h5>{props.contacts.opening_hors_sun}</h5>
                            </Col>
                    </Row>
                </div>
                
                
            )}
    </div>

)


const LocationFunction = props => (

    <div>
        {props.language === "Japanese" ? (
            <div>
                <Row style={{justifyContent:"start"}}>
                    <Col>
                        <img src={props.locations.shop_photo1} alt="shopphoto" style={{width:"370px", height:"200px"}} />
                        <h5 style={{textAlign:"center"}}>Address</h5>
                        <p style={{textAlign:"center"}} >{props.locations.street} {props.locations.suburb} {props.locations.state} {props.locations.post_code}</p>
                    </Col>
                <div style={{paddingLeft:"20%", paddingRight:"20%"}}>
                    <Col>
                        <h4 style={{textAlign:"center"}}>Note</h4>
                        {props.locations.shop_extra_info_ja}
                        {props.locations.shop_info_2_ja}
                        <div style={{paddingTop:"100px"}}>
                            <iframe src={props.locations.google} title="Location" style={{width:"370px", height:"200px"}} />
                        </div>
                    </Col>
                </div>
                </Row >
    
            </div>
        ) : (
                <div>
                    <Row style={{justifyContent:"start"}}>
                        <Col>
                            <img src={props.locations.shop_photo1} alt="shopphoto" style={{width:"370px", height:"200px"}} />
                            <h5 style={{textAlign:"center"}}>Address</h5>
                            <p style={{textAlign:"center"}} >{props.locations.street} {props.locations.suburb} {props.locations.state} {props.locations.post_code}</p>
                        </Col>
                    <div style={{paddingLeft:"20%", paddingRight:"20%"}}>
                        <Col>
                            <h4 style={{textAlign:"center"}}>Note</h4>
                            {props.locations.shop_extra_info_en}
                            {props.locations.shop_info_2_en}
                            <div style={{paddingTop:"100px"}}>
                                <iframe src={props.locations.google} title="Location" style={{width:"370px", height:"200px"}} />
                            </div>
                        </Col>
                    </div>
                    </Row >
     
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
                    {this.locationList()}   
                    {this.contactList()}
                </div>

                <Footer />
            </div>
        )
    }
}