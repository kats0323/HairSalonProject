import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './contact.css'
import Footer from '../partials/_footer'

const ContactFunction = props => (

    <div>
        {props.language == "Japanese" ? (
            <div>
                <h4>phone_number</h4>
                0{props.contacts.phone_number}
                <br />
                <h4>line_id</h4>
                {props.contacts.line_id}
                <br />
                <h4>facebook</h4>
                {props.contacts.facebook}
                <br />
                <h4>instagram</h4>
                {props.contacts.instagram}
                <br />
                <h4>opening_hors_ja</h4>
                {props.contacts.opening_hors_ja}
                <br />
                <h4>contact_info_ja</h4>
                {props.contacts.contact_info_ja}
                <h4>google</h4>
                <iframe src={props.contacts.google}></iframe>
                <br />
                <h4>Address</h4>
                {props.contacts.street}{props.contacts.suburb}{props.contacts.state}
                <br />
                <h4>Post Code</h4>
                {props.contacts.post_code}
                <br />
                <h4>shop_photo1</h4>
                <img src={props.contacts.shop_photo1} style={{ width: "500px", margin: "20px", height: "300px" }} />
                <br />
                <h4>shop_info_ja</h4>
                {props.contacts.shop_info_ja}
                <br />
            </div>
        ) : (
                <div>
                    <h4>phone_number</h4>
                    0{props.contacts.phone_number}
                    <br />
                    <h4>line_id</h4>
                    {props.contacts.line_id}
                    <br />
                    <h4>facebook</h4>
                    {props.contacts.facebook}
                    <br />
                    <h4>instagram</h4>
                    {props.contacts.instagram}
                    <br />
                    <h4>opening_hors_en</h4>
                    {props.contacts.opening_hors_en}
                    <br />
                    <h4>contact_info_en</h4>
                    {props.contacts.contact_info_en}
                    <h4>google</h4>
                    <iframe src={props.contacts.google}></iframe>
                    <br />
                    <h4>Address</h4>
                    {props.contacts.street}{props.contacts.suburb}{props.contacts.state}
                    <br />
                    <h4>Post Code</h4>
                    {props.contacts.post_code}
                    <br />
                    <h4>shop_photo1</h4>
                    <img src={props.contacts.shop_photo1} style={{ width: "500px", margin: "20px", height: "300px" }} />
                    <br />
                    <h4>shop_info_en</h4>
                    {props.contacts.shop_info_en}
                    <br />
                </div>
            )}
        <br />
    </div>

)


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [] };
    }

    componentDidMount() {
        axios.get('/contacts/')
            .then(response => {
                this.setState({ contacts: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    contactList() {
        return this.state.contacts.map(currentcontact => {
            return <ContactFunction contacts={currentcontact} key={currentcontact._id} language={this.props.language} />;
        })
    }

    render() {
        const Line = ({ color }) => (
            <div class="style-line">
               <hr style={{ color: "green",border:"0.4px solid", width:"61%",}} /> 
           </div>
        );
        return (
            <div>
                <Line />
                <div className="contactPad">
                    <h1>Contact</h1>
                    <br />
                    {this.contactList()}
                </div>
                <Line />

                <Footer />
            </div>
        )
    }
}