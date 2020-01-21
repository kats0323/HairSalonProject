import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContactFunction = props => (

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
        <h4>contact_info_en</h4>
        {props.contacts.contact_info_en}
        <br />
        <h4>contact_info_ja</h4>
        {props.contacts.contact_info_ja}
        <br />
<<<<<<< HEAD
        <h4>opening_hors_en</h4>
        {props.contacts.opening_hors_en}
        <br />
        <h4>opening_hors_ja</h4>
        {props.contacts.opening_hors_ja}
=======
        <h4>contact_extra_info_en</h4>
        {props.contacts.contact_extra_info_en}
        <br />
        <h4>contact_extra_info_ja</h4>
        {props.contacts.contact_extra_info_ja}
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
>>>>>>> 4f018f763f74f5103e55cd412764678ef170b3e3
        <br />
        <h4>street</h4>
        {props.contacts.street}
        <br />
        <h4>suburb</h4>
        {props.contacts.suburb}
        <br />
<<<<<<< HEAD
        <h4></h4>
=======
        <h4>State</h4>
>>>>>>> 4f018f763f74f5103e55cd412764678ef170b3e3
        {props.contacts.state}
        <br />
        <h4>state</h4>
        {props.contacts.post_code}
        <br />
        <h4>google</h4>
<<<<<<< HEAD
        <iframe src={props.contacts.google}></iframe>
=======
        <iframe src={props.contacts.google} title="google"></iframe>
>>>>>>> 4f018f763f74f5103e55cd412764678ef170b3e3
        <br />
        {props.contacts.google}
        <br />
        <h4>shop_info_en</h4>
        {props.contacts.shop_info_en}
        <br />
        <h4>shop_info_ja</h4>
        {props.contacts.shop_info_ja}
        <br />
<<<<<<< HEAD
        <h4>shop_photo1</h4>
        <img src={props.contacts.shop_photo1} style={{ width: "500px", margin: "20px", height: "300px" }} />
=======
        <h4>shop_extra_info_en</h4>
        {props.contacts.shop_extra_info_en}
        <br />
        <h4>shop_extra_info_ja</h4>
        {props.contacts.shop_extra_info_ja}
        <br />
        <h4>shop_photo1</h4>
        <img src={props.contacts.shop_photo1} style={{ width: "500px", margin: "20px", height: "300px" }} alt="shop_photo" />
>>>>>>> 4f018f763f74f5103e55cd412764678ef170b3e3

        <Link to={"/admin/contacts/edit/" + props.contacts._id}>edit</Link> | <button href="#" onClick={() => { props.deleteContact(props.contacts._id) }}>delete</button>
    </div>

)


export default class ContactList extends Component {
    constructor(props) {
        super(props);

        this.deleteContact = this.deleteContact.bind(this)

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

    deleteContact(id) {
        axios.delete('/contacts/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            contacts: this.state.contacts.filter(el => el._id !== id)
        })
    }

    contactList() {
        return this.state.contacts.map(currentcontact => {
            return <ContactFunction contacts={currentcontact} deleteContact={this.deleteContact} key={currentcontact._id} />;
        })
    }

    render() {
        return (
            <div>
                <h1>Contact</h1>
                <br />
                {this.contactList()}
            </div>
        )
    }
}