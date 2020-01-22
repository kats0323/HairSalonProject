import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'

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
        <h4>contact_info_1_en</h4>
        {props.contacts.contact_info_1_en}
        <br />
        <h4>contact_info_1_ja</h4>
        {props.contacts.contact_info_1_ja}
        <br />
        <h4>contact_info_2_en</h4>
        {props.contacts.contact_info_2_en}
        <br />
        <h4>contact_info_2_ja</h4>
        {props.contacts.contact_info_2_ja}
        <br />
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
        <br />

        <Link to={"/admin/contacts/edit/" + props.contacts._id}>edit</Link> | <button href="#" onClick={() => { props.deleteContact(props.contacts._id) }}>delete</button>
    </div>

)


class ContactList extends Component {
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
        if (!this.props.isAuthenticated) {
            return (
                <div className='not-allowed'>
                    {/* ここだけ */}
                    <div className='cool-green-logo'>
                        <img src={process.env.PUBLIC_URL + '/img/GreenLogo.png'} alt="logo" style={{ height: "80px" }} />
                        {/* <hr className='logo-line'width="600" color="green" noshade></hr> */}
                    </div>
                    <h1 className='not-author'> NOT AUTHORISED</h1>
                    <p className='message_'>Plese logoin before you go into admin page </p>
                    <div className='dashboard_'>
                        <a href="/admin">GO TO DASHBOARD</a>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Contact</h1>
                    <br />
                    {this.contactList()}
                </div>
            )
        }
    }
}

ContactList.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(ContactList);
