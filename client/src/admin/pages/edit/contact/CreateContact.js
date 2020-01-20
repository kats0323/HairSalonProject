import React, { Component } from 'react';
// import axios from 'axios';

export default class CreateContact extends Component {

    constructor(props) {
        super(props);

        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeLineId = this.onChangeLineId.bind(this);
        this.onChangeFacebook = this.onChangeFacebook.bind(this);
        this.onChangeInstagram = this.onChangeInstagram.bind(this);
        this.onChangeContactInfoEn = this.onChangeContactInfoEn.bind(this);
        this.onChangeContactInfoJa = this.onChangeContactInfoJa.bind(this);
        this.onChangeContactExtraInfoEn = this.onChangeContactExtraInfoEn.bind(this);
        this.onChangeContactExtraInfoJa = this.onChangeContactExtraInfoJa.bind(this);
        this.onChangeOpeningHorsMon = this.onChangeOpeningHorsMon.bind(this);
        this.onChangeOpeningHorsTue = this.onChangeOpeningHorsTue.bind(this);
        this.onChangeOpeningHorsWed = this.onChangeOpeningHorsWed.bind(this);
        this.onChangeOpeningHorsThu = this.onChangeOpeningHorsThu.bind(this);
        this.onChangeOpeningHorsFri = this.onChangeOpeningHorsFri.bind(this);
        this.onChangeOpeningHorsSat = this.onChangeOpeningHorsSat.bind(this);
        this.onChangeOpeningHorsSun = this.onChangeOpeningHorsSun.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeSuburb = this.onChangeSuburb.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeGoogle = this.onChangeGoogle.bind(this);
        this.onChangePostCode = this.onChangePostCode.bind(this);
        this.onChangeShopPhoto1 = this.onChangeShopPhoto1.bind(this);
        // this.onChangeShopPhoto2 = this.onChangeShopPhoto2.bind(this);
        this.onChangeShopInfoEn = this.onChangeShopInfoEn.bind(this);
        this.onChangeShopInfoJa = this.onChangeShopInfoJa.bind(this);
        this.onChangeShopExtraInfoEn = this.onChangeShopExtraInfoEn.bind(this);
        this.onChangeShopExtraInfoJa = this.onChangeShopExtraInfoJa.bind(this);



        this.state = {
            phone_number: "",
            line_id: "",
            facebook: "",
            instagram: "",
            contact_info_en: "",
            contact_info_ja: "",
            contact_extra_info_en: "",
            contact_extra_info_ja: "",
            opening_hors_mon: "",
            opening_hors_tue: "",
            opening_hors_wed: "",
            opening_hors_thu: "",
            opening_hors_fri: "",
            opening_hors_sat: "",
            opening_hors_sun: "",
            street: "",
            suburb: "",
            state: "",
            google: "",
            post_code: "",
            shop_photo1: "",
            // shop_photo2: "",
            shop_info_en: "",
            shop_info_ja: "",
            shop_extra_info_en: "",
            shop_extra_info_ja: ""
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

    onChangeContactInfoEn(e) {
        this.setState({
            contact_info_en: e.target.value
        })
    }

    onChangeContactInfoJa(e) {
        this.setState({
            contact_info_ja: e.target.value
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

    onChangeOpeningHorsJa(e) {
        this.setState({
            opening_hors_ja: e.target.value
        })
    }
    onChangeStreet(e) {
        this.setState({
            street: e.target.value
        })
    }

    onChangeSuburb(e) {
        this.setState({
            suburb: e.target.value
        })
    }

    onChangeState(e) {
        this.setState({
            state: e.target.value
        })
    }

    onChangeGoogle(e) {
        this.setState({
            google: e.target.value
        })
    }

    onChangePostCode(e) {
        this.setState({
            post_code: e.target.value
        })
    }

    onChangeShopPhoto1(e) {
        this.setState({ shop_photo1: e.target.files[0] })
    }

    // onChangeShopPhoto2(e) {
    //     this.setState({ shop_photo2: e.target.files[1] })
    // }

    onChangeShopInfoJa(e) {
        this.setState({
            shop_info_ja: e.target.value
        })
    }
    onChangeShopInfoEn(e) {
        this.setState({
            shop_info_en: e.target.value
        })
    }

    onChangeShopExtraInfoJa(e) {
        this.setState({
            shop_extra_info_ja: e.target.value
        })
    }
    onChangeShopExtraInfoEn(e) {
        this.setState({
            shop_extra_info_en: e.target.value
        })
    }

    render() {
        return (
            <div className="container" >
                <div className="row">
                    <form action="/contacts/add" method="POST" enctype="multipart/form-data" >
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
                            <label>Contact Info English: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="contact_info_en"
                                value={this.state.contact_info_en}
                                onChange={this.onChangeContactInfoEn}
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact Info Japanese: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="contact_info_ja"
                                value={this.state.contact_info_ja}
                                onChange={this.onChangeContactInfoJa}
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
                            <label>Street: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="street"
                                value={this.state.street}
                                onChange={this.onChangeStreet}
                            />
                        </div>
                        <div className="form-group">
                            <label>Suburb: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="suburb"
                                value={this.state.suburb}
                                onChange={this.onChangeSuburb}
                            />
                        </div>
                        <div className="form-group">
                            <label>State: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="state"
                                value={this.state.state}
                                onChange={this.onChangeState}
                            />
                        </div>
                        <div className="form-group">
                            <label>Google: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="google"
                                value={this.state.google}
                                onChange={this.onChangeGoogle}
                            />
                        </div>
                        <div className="form-group">
                            <label>Post Code: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="post_code"
                                value={this.state.post_code}
                                onChange={this.onChangePostCode}
                            />
                        </div>
                        <div className="form-group">
                            <label>Shop Info English: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="shop_info_en"
                                value={this.state.shop_info_en}
                                onChange={this.onChangeShopInfoEn}
                            />
                        </div>
                        <div className="form-group">
                            <label>Shop Info Japanese: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="shop_info_ja"
                                value={this.state.shop_info_ja}
                                onChange={this.onChangeShopInfoJa}
                            />
                        </div>
                        <div className="form-group">
                            <label>Shop Extra Info English: </label>
                            <input type="text"

                                className="form-control"
                                name="shop_extra_info_en"
                                value={this.state.shop_extra_info_en}
                                onChange={this.onChangeShopExtraInfoEn}
                            />
                        </div>
                        <div className="form-group">
                            <label>Shop Extra Info Japanese: </label>
                            <input type="text"

                                className="form-control"
                                name="shop_extra_info_ja"
                                value={this.state.shop_extra_info_ja}
                                onChange={this.onChangeShopExtraInfoJa}
                            />
                        </div>
                        <div className="form-group">
                            <input type="file" name="photo" onChange={this.onChangeShopPhoto1} />
                        </div>
                        {/* <div className="form-group">
                            <input type="file" name="shop_photo2" onChange={this.onChangeShopPhoto2} />
                        </div> */}
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}