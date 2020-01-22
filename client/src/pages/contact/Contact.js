import React, { Component } from 'react';
import axios from 'axios';
import './contact.css'
import Footer from '../partials/_footer'

const ContactFunction = props => (

    <div>
        {props.language === "Japanese" ? (
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
                <h4>opening_hors_mon</h4>
                {props.contacts.opening_hors_mon}
                <br />
                <h4>opening_hors_tue</h4>
                {props.contacts.opening_hors_tue}
                <br />
                <h4>opening_hors_wed</h4>
                {props.contacts.opening_hors_wed}
                <br />
                <h4>opening_hors_thu</h4>
                {props.contacts.opening_hors_thu}
                <br />
                <h4>opening_hors_fri</h4>
                {props.contacts.opening_hors_fri}
                <br />
                <h4>opening_hors_sat</h4>
                {props.contacts.opening_hors_sat}
                <br />
                <h4>opening_hors_sun</h4>
                {props.contacts.opening_hors_sun}
                <br />
                <h4>contact_info_ja</h4>
                {props.contacts.contact_info_ja}
                <br />
                <h4>contact_extra_info_ja</h4>
                {props.contacts.contact_extra_info_ja}
                <h4>google</h4>
                <iframe src={props.contacts.google} title="google"></iframe>
                <br />
                <h4>Address</h4>
                {props.contacts.street}{props.contacts.suburb}{props.contacts.state}
                <br />
                <h4>Post Code</h4>
                {props.contacts.post_code}
                <br />
                <h4>shop_photo1</h4>
                <img className='place_photo'src={props.contacts.shop_photo1}  alt="shopphoto" />
                <br />
                <h4>shop_info_ja</h4>
                {props.contacts.shop_info_ja}
                <br />
                <h4>shop_extra_info_ja</h4>
                {props.contacts.shop_extra_info_ja}
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
                    <h4>opening_hors_mon</h4>
                    {props.contacts.opening_hors_mon}
                    <br />
                    <h4>opening_hors_tue</h4>
                    {props.contacts.opening_hors_tue}
                    <br />
                    <h4>opening_hors_wed</h4>
                    {props.contacts.opening_hors_wed}
                    <br />
                    <h4>opening_hors_thu</h4>
                    {props.contacts.opening_hors_thu}
                    <br />
                    <h4>opening_hors_fri</h4>
                    {props.contacts.opening_hors_fri}
                    <br />
                    <h4>opening_hors_sat</h4>
                    {props.contacts.opening_hors_sat}
                    <br />
                    <h4>opening_hors_sun</h4>
                    {props.contacts.opening_hors_sun}
                    <br />
                    <h4>contact_info_en</h4>
                    {props.contacts.contact_info_en}
                    <br />
                    <h4>contact_extra_info_en</h4>
                    {props.contacts.contact_extra_info_en}
                    <br />
                    <h4>google</h4>
                    <iframe src={props.contacts.google} title="google"></iframe>
                    <br />
                    <h4>Address</h4>
                    {props.contacts.street}{props.contacts.suburb}{props.contacts.state}
                    <br />
                    <h4>Post Code</h4>
                    {props.contacts.post_code}
                    <br />
                    <h4>shop_photo1</h4>
                    <img src={props.contacts.shop_photo1} style={{ width: "500px", margin: "20px", height: "300px" }} alt="shopphoto" />
                    <br />
                    <h4>shop_info_en</h4>
                    {props.contacts.shop_info_en}
                    <br />
                    <h4>shop_extra_info_en</h4>
                    {props.contacts.shop_extra_info_en}
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
 
        return (
            <div>
                <div className="contactPad">
                    <h1>Contact</h1>
                    <br />
                    {this.contactList()}
                </div>

                <Footer />
            </div>
        )
    }
}