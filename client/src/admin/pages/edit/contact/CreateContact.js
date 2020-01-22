import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from 'prop-types'


class CreateContact extends Component {
    constructor(props) {
        super(props)

        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeLineId = this.onChangeLineId.bind(this);
        this.onChangeFacebook = this.onChangeFacebook.bind(this);
        this.onChangeInstagram = this.onChangeInstagram.bind(this);
        this.onChangeContactInfo1En = this.onChangeContactInfo1En.bind(this);
        this.onChangeContactInfo1Ja = this.onChangeContactInfo1Ja.bind(this);
        this.onChangeContactInfo2En = this.onChangeContactInfo2En.bind(this);
        this.onChangeContactInfo2Ja = this.onChangeContactInfo2Ja.bind(this);
        this.onChangeContactExtraInfoEn = this.onChangeContactExtraInfoEn.bind(this);
        this.onChangeContactExtraInfoJa = this.onChangeContactExtraInfoJa.bind(this);
        this.onChangeOpeningHorsMon = this.onChangeOpeningHorsMon.bind(this);
        this.onChangeOpeningHorsTue = this.onChangeOpeningHorsTue.bind(this);
        this.onChangeOpeningHorsWed = this.onChangeOpeningHorsWed.bind(this);
        this.onChangeOpeningHorsThu = this.onChangeOpeningHorsThu.bind(this);
        this.onChangeOpeningHorsFri = this.onChangeOpeningHorsFri.bind(this);
        this.onChangeOpeningHorsSat = this.onChangeOpeningHorsSat.bind(this);
        this.onChangeOpeningHorsSun = this.onChangeOpeningHorsSun.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            phone_number: "",
            line_id: "",
            facebook: "",
            instagram: "",
            contact_info_1_en: "",
            contact_info_1_ja: "",
            contact_info_2_en: "",
            contact_info_2_ja: "",
            contact_extra_info_en: "",
            contact_extra_info_ja: "",
            opening_hors_mon: "",
            opening_hors_tue: "",
            opening_hors_wed: "",
            opening_hors_thu: "",
            opening_hors_fri: "",
            opening_hors_sat: "",
            opening_hors_sun: ""

        }
    }
    onChangePhoneNumber(e) {
        this.setState({
            phone_number: e.target.value
        })
    }

    onChangeLineId(e) {
        this.setState({
            line_id: e.target.value
        })
    }

    onChangeFacebook(e) {
        this.setState({
            facebook: e.target.value
        })
    }

    onChangeInstagram(e) {
        this.setState({
            instagram: e.target.value
        })
    }

    onChangeContactInfo1En(e) {
        this.setState({
            contact_info_1_en: e.target.value
        })
    }

    onChangeContactInfo1Ja(e) {
        this.setState({
            contact_info_1_ja: e.target.value
        })
    }
    onChangeContactInfo2En(e) {
        this.setState({
            contact_info_2_en: e.target.value
        })
    }

    onChangeContactInfo2Ja(e) {
        this.setState({
            contact_info_2_ja: e.target.value
        })
    }
    onChangeContactExtraInfoEn(e) {
        this.setState({
            contact_extra_info_en: e.target.value
        })
    }

    onChangeContactExtraInfoJa(e) {
        this.setState({
            contact_extra_info_ja: e.target.value
        })
    }
    onChangeOpeningHorsMon(e) {
        this.setState({
            opening_hors_mon: e.target.value
        })
    }

    onChangeOpeningHorsTue(e) {
        this.setState({
            opening_hors_tue: e.target.value
        })
    }
    onChangeOpeningHorsWed(e) {
        this.setState({
            opening_hors_wed: e.target.value
        })
    }

    onChangeOpeningHorsThu(e) {
        this.setState({
            opening_hors_thu: e.target.value
        })
    }
    onChangeOpeningHorsFri(e) {
        this.setState({
            opening_hors_fri: e.target.value
        })
    }

    onChangeOpeningHorsSat(e) {
        this.setState({
            opening_hors_sat: e.target.value
        })
    }
    onChangeOpeningHorsSun(e) {
        this.setState({
            opening_hors_sun: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const contact = {
            phone_number: this.state.phone_number,
            line_id: this.state.line_id,
            facebook: this.state.facebook,
            instagram: this.state.instagram,
            contact_info_1_en: this.state.contact_info_1_en,
            contact_info_1_ja: this.state.contact_info_1_ja,
            contact_info_2_en: this.state.contact_info_2_en,
            contact_info_2_ja: this.state.contact_info_2_ja,
            contact_extra_info_en: this.state.contact_extra_info_en,
            contact_extra_info_ja: this.state.contact_extra_info_ja,
            opening_hors_mon: this.state.opening_hors_mon,
            opening_hors_tue: this.state.opening_hors_tue,
            opening_hors_wed: this.state.opening_hors_wed,
            opening_hors_thu: this.state.opening_hors_thu,
            opening_hors_fri: this.state.opening_hors_fri,
            opening_hors_sat: this.state.opening_hors_sat,
            opening_hors_sun: this.state.opening_hors_sun
        }

        console.log(contact);

        axios.post('/contacts/add', contact)
            .then(res => console.log(res.data));

        this.setState({
            phone_number: "",
            line_id: "",
            facebook: "",
            instagram: "",
            contact_info_1_en: "",
            contact_info_1_ja: "",
            contact_info_2_en: "",
            contact_info_2_ja: "",
            contact_extra_info_en: "",
            contact_extra_info_ja: "",
            opening_hors_mon: "",
            opening_hors_tue: "",
            opening_hors_wed: "",
            opening_hors_thu: "",
            opening_hors_fri: "",
            opening_hors_sat: "",
            opening_hors_sun: ""
        })
        window.location = "/admin/contacts"

    }
    render() {
        if (!this.props.isAuthenticated) {
            return (
                <div>
                    <h1> NOT AUTHORISED</h1>
                    <a href="/admin">GO TO DASHBOARD</a>
                </div>
            )
        } else {
            return (
                <div style={{ paddingLeft: "300px" }}>
                    <h3>Create New Contact</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Phone Number: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="phone_number"
                                value={this.state.phone_number}
                                onChange={this.onChangePhoneNumber}
                            />
                        </div>
                        <div className="form-group">
                            <label>Line Id: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="line_id"
                                value={this.state.line_id}
                                onChange={this.onChangeLineId}
                            />
                        </div>
                        <div className="form-group">
                            <label>Facebook: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="facebook"
                                value={this.state.facebook}
                                onChange={this.onChangeFacebook}
                            />
                        </div>
                        <div className="form-group">
                            <label>Instagra: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="instagra"
                                value={this.state.instagra}
                                onChange={this.onChangeInstagram}
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact Info English 1: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="contact_info_1_en"
                                value={this.state.contact_info_1_en}
                                onChange={this.onChangeContactInfo1En}
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact Info Japanese 1: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="contact_info_1_ja"
                                value={this.state.contact_info_1_ja}
                                onChange={this.onChangeContactInfo1Ja}
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact Extra Info English 2: </label>
                            <input type="text"

                                className="form-control"
                                name="contact_extra_info_2_en"
                                value={this.state.contact_extra_info_2_en}
                                onChange={this.onChangeContactExtraInfo2En}
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact Info Japanese 2: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="contact_info_2_ja"
                                value={this.state.contact_info_2_ja}
                                onChange={this.onChangeContactInfo2Ja}
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact Extra Info English: </label>
                            <input type="text"

                                className="form-control"
                                name="contact_extra_info_en"
                                value={this.state.contact_extra_info_en}
                                onChange={this.onChangeContactExtraInfoEn}
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact Extra Info Japanese: </label>
                            <input type="text"

                                className="form-control"
                                name="contact_extra_info_ja"
                                value={this.state.contact_extra_info_ja}
                                onChange={this.onChangeContactExtraInfoJa}
                            />
                        </div>
                        <div className="form-group">
                            <label>Opening Hours Monday: </label>
                            <input type="text"

                                className="form-control"
                                name="opening_hors_mon"
                                value={this.state.opening_hors_mon}
                                onChange={this.onChangeOpeningHorsMon}
                            />
                        </div>
                        <div className="form-group">
                            <label>Opening Hours Tueday: </label>
                            <input type="text"

                                className="form-control"
                                name="opening_hors_tue"
                                value={this.state.opening_hors_tue}
                                onChange={this.onChangeOpeningHorsTue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Opening Hours English　Wednesday: </label>
                            <input type="text"

                                className="form-control"
                                name="opening_hors_wed"
                                value={this.state.opening_hors_wed}
                                onChange={this.onChangeOpeningHorsWed}
                            />
                        </div>
                        <div className="form-group">
                            <label>Opening Hours Thursday: </label>
                            <input type="text"

                                className="form-control"
                                name="opening_hors_thu"
                                value={this.state.opening_hors_thu}
                                onChange={this.onChangeOpeningHorsThu}
                            />
                        </div>
                        <div className="form-group">
                            <label>Opening Hours Friday: </label>
                            <input type="text"

                                className="form-control"
                                name="opening_hors_fri"
                                value={this.state.opening_hors_fri}
                                onChange={this.onChangeOpeningHorsFri}
                            />
                        </div>
                        <div className="form-group">
                            <label>Opening Hours Saturday: </label>
                            <input type="text"

                                className="form-control"
                                name="opening_hors_sat"
                                value={this.state.opening_hors_sat}
                                onChange={this.onChangeOpeningHorsSat}
                            />
                        </div>
                        <div className="form-group">
                            <label>Opening Hours Sunday: </label>
                            <input type="text"

                                className="form-control"
                                name="opening_hors_sun"
                                value={this.state.opening_hors_sun}
                                onChange={this.onChangeOpeningHorsSun}
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>


                    </form>
                </div>
            )
        }

    }
}
CreateContact.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(CreateContact);
