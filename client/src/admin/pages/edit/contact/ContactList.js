import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Card } from "antd";
import "../../partials/edit.css"

const ContactFunction = props => (

    <div className="edit_container">
        <Card className="container" style={{ border: "3px solid #004d25", backgroundColor: "#a4d5bd", display: "flex", justifyContent: "center" }}>

            <p style={{ fontSize: "20px", color: "black" }}>Number/電話番号</p>
            <p className="admin_words">{props.contacts.phone_number}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>Line ID</p>
            <p className="admin_words">{props.contacts.line_id}</p>
            <br />


            <p style={{ fontSize: "20px", color: "black" }}>Facebook</p>
            <p className="admin_words">{props.contacts.facebook}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>Instagram Account ID</p>
            <p className="admin_words">{props.contacts.instagram}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>Contact Information 1</p>
            <p className="admin_words">{props.contacts.contact_info_1_en}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>コンタクト情報１</p>
            <p className="admin_words">{props.contacts.contact_info_1_ja}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>Contact Information 2</p>
            <p className="admin_words">{props.contacts.contact_info_2_en}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>コンタクト情報2</p>
            <p className="admin_words">{props.contacts.contact_info_2_ja}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>Contact Extra Information</p>
            <p className="admin_words">{props.contacts.contact_extra_info_en}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>コンタクトエクストラ情報</p>
            <p className="admin_words">{props.contacts.contact_extra_info_ja}</p>
            <br />
            <h3>Opening Hours</h3>
            <p style={{ fontSize: "20px", color: "black" }}>Monday/月曜</p>
            <p className="admin_words">{props.contacts.opening_hors_mon}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>Tuesday/火曜</p>
            <p className="admin_words">{props.contacts.opening_hors_tue}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>Wednesday/水曜</p>
            <p className="admin_words">{props.contacts.opening_hors_wed}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>Thursday/木曜</p>
            <p className="admin_words">{props.contacts.opening_hors_thu}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>Friday/金曜</p>
            <p className="admin_words">{props.contacts.opening_hors_fri}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}>Saturday/土曜</p>
            <p className="admin_words">{props.contacts.opening_hors_sat}</p>
            <br />

            <p style={{ fontSize: "20px", color: "black" }}> Sunday/日曜</p>
            <p className="admin_words">{props.contacts.opening_hors_sun}</p>
            <br />

            <br />
            <button><Link to={"/admin/contacts/edit/" + props.contacts._id}>Edit</Link></button>
            <br />
            <br />
            <button href="#" onClick={() => { props.deleteBlog(props.contacts._id) }}>Delete</button>
            <br />
            <br />
        </Card>
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
                <div style={{ textAlign: "center" }}>
                    <h1 class="admin_title_page">Contact Admin Page</h1>
                    <br />
                    <br />
                    <button><Link to={"/admin/contacts/create/"}>Create</Link></button>
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
