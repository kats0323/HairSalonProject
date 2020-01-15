import React, { Component } from 'react';
import axios from 'axios';

export default class CreateContact extends Component {

    constructor(props) {
        super(props);

        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeLineId = this.onChangeLineId.bind(this);
        this.onChangeFacebook = this.onChangeFacebook.bind(this);
        this.onChangeInstagram = this.onChangeInstagram.bind(this);
        this.onChangeContactInfoEn = this.onChangeContactInfoEn.bind(this);
        this.onChangeContactInfoJa = this.onChangeContactInfoJa.bind(this);
        this.onChangeOpeningHorsEn = this.onChangeOpeningHorsEn.bind(this);
        this.onChangeOpeningHorsJa = this.onChangeOpeningHorsJa.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeSuburb = this.onChangeSuburb.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeGoogle = this.onChangeGoogle.bind(this);
        this.onChangePostCode = this.onChangePostCode.bind(this);
        this.onChangeShopPhoto1 = this.onChangeShopPhoto1.bind(this);
        // this.onChangeShopPhoto2 = this.onChangeShopPhoto2.bind(this);
        this.onChangeShopInfoEn = this.onChangeShopInfoEn.bind(this);
        this.onChangeShopInfoJa = this.onChangeShopInfoJa.bind(this);



        this.state = {
            phone_number: "",
            line_id: "",
            facebook: "",
            instagram: "",
            contact_info_en: "",
            contact_info_ja: "",
            opening_hors_en: "",
            opening_hors_ja: "",
            street: "",
            suburb: "",
            state: "",
            google: "",
            post_code: "",
            shop_photo1: "",
            // shop_photo2: "",
            shop_info_en: "",
            shop_info_ja: ""
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
    onChangeOpeningHorsEn(e) {
        this.setState({
            opening_hors_en: e.target.value
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
                            <label>Opening Hours English: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="opening_hors_en"
                                value={this.state.opening_hors_en}
                                onChange={this.onChangeOpeningHorsEn}
                            />
                        </div>
                        <div className="form-group">
                            <label>Opening Hours Japanese: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="opening_hors_ja"
                                value={this.state.opening_hors_ja}
                                onChange={this.onChangeOpeningHorsJa}
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