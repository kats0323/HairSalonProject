import React, { Component } from 'react';
import axios from 'axios';
import './contact.css'
import Footer from '../partials/_footer'

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
                    <h4>contact_info_1_en</h4>
                    {props.contacts.contact_info_en}
                    <h4>contact_info_2_en</h4>
                    {props.contacts.contact_info_en}
                    <h4>contact_extra_info_en</h4>
                    {props.contacts.contact_extra_info_en}

                </div>
            )}
    </div>

)


const LocationFunction = props => (

    <div>
        {props.language === "Japanese" ? (
            <div>
                <h4>street</h4>
                {props.locations.street}
                <h4>suburb</h4>
                {props.locations.suburb}
                <h4>state</h4>
                {props.locations.state}
                <h4>google</h4>
                <iframe src={props.locations.google}></iframe>
                <h4>post_code</h4>
                {props.locations.post_code}
                <h4>shop_photo1</h4>
                {props.locations.shop_photo1}
                <h4>shop_info_1_ja</h4>
                {props.locations.shop_info_1_ja}
                <h4>shop_info_2_ja</h4>
                {props.locations.shop_info_2_ja}
                <h4>shop_extra_info_ja</h4>
                {props.locations.shop_extra_info_ja}
            </div>
        ) : (
                <div>
                    <h4>street</h4>
                    {props.locations.street}
                    <h4>suburb</h4>
                    {props.locations.suburb}
                    <h4>state</h4>
                    {props.locations.state}
                    <h4>google</h4>
                    <iframe src={props.locations.google}></iframe>
                    <h4>post_code</h4>
                    {props.locations.post_code}
                    <h4>shop_photo1</h4>
                    {props.locations.shop_photo1}
                    <h4>shop_info_1_en</h4>
                    {props.locations.shop_info_1_en}
                    <h4>shop_info_2_en</h4>
                    {props.locations.shop_info_2_en}
                    <h4>shop_extra_info_en</h4>
                    {props.locations.shop_extra_info_en}
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
                    <h1>Contact</h1>
                    <br />
                    {this.contactList()}
                    {this.locationList()}
                </div>

                <Footer />
            </div>
        )
    }
}