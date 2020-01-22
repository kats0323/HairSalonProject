import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'

class CreateLocation extends Component {

    constructor(props) {
        super(props);

        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeSuburb = this.onChangeSuburb.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeGoogle = this.onChangeGoogle.bind(this);
        this.onChangePostCode = this.onChangePostCode.bind(this);
        this.onChangeShopPhoto1 = this.onChangeShopPhoto1.bind(this);
        this.onChangeShopInfo1En = this.onChangeShopInfo1En.bind(this);
        this.onChangeShopInfo1Ja = this.onChangeShopInfo1Ja.bind(this);
        this.onChangeShopInfo2En = this.onChangeShopInfo2En.bind(this);
        this.onChangeShopInfo2Ja = this.onChangeShopInfo2Ja.bind(this);
        this.onChangeShopExtraInfoEn = this.onChangeShopExtraInfoEn.bind(this);
        this.onChangeShopExtraInfoJa = this.onChangeShopExtraInfoJa.bind(this);



        this.state = {
            street: "",
            suburb: "",
            state: "",
            google: "",
            post_code: "",
            shop_photo1: "",
            shop_info_1_en: "",
            shop_info_1_ja: "",
            shop_info_2_en: "",
            shop_info_2_ja: "",
            shop_extra_info_en: "",
            shop_extra_info_ja: ""
        }
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


    onChangeShopInfo1Ja(e) {
        this.setState({
            shop_info_1_ja: e.target.value
        })
    }
    onChangeShopInfo1En(e) {
        this.setState({
            shop_info_1_en: e.target.value
        })
    }

    onChangeShopInfo2Ja(e) {
        this.setState({
            shop_info_2_ja: e.target.value
        })
    }
    onChangeShopInfo2En(e) {
        this.setState({
            shop_info_2_en: e.target.value
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
        if (!this.props.isAuthenticated) {
            return (
                <div className='not-allowed'>
                    {/* ここだけ */}
                    <div className='cool-green-logo'>
                        <img src={process.env.PUBLIC_URL + '/img/GreenLogo.png'} alt="logo" style={{ height: "80px" }} />
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
                <div className="container" >
                    <div className="row">
                        <form action="/locations/add" method="POST" enctype="multipart/form-data" >
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
                                <label>Shop Info 1 English: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    name="shop_info_1_en"
                                    value={this.state.shop_info_1_en}
                                    onChange={this.onChangeShopInfo1En}
                                />
                            </div>
                            <div className="form-group">
                                <label>Shop Info 1 Japanese: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    name="shop_info_1_ja"
                                    value={this.state.shop_info_1_ja}
                                    onChange={this.onChangeShopInfo1Ja}
                                />
                            </div>
                            <div className="form-group">
                                <label>Shop Info 2 English: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    name="shop_info_2_en"
                                    value={this.state.shop_info_2_en}
                                    onChange={this.onChangeShopInfo2En}
                                />
                            </div>
                            <div className="form-group">
                                <label>Shop Info 2 Japanese: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    name="shop_info_2_ja"
                                    value={this.state.shop_info_2_ja}
                                    onChange={this.onChangeShopInfo2Ja}
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

                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

CreateLocation.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(CreateLocation);