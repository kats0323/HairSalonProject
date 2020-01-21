import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from 'prop-types'



class CreateColor extends Component {
    constructor(props) {
        super(props)

        this.onChangeJaCourse = this.onChangeJaCourse.bind(this);
        this.onChangeEnCourse = this.onChangeEnCourse.bind(this);
        this.onChangeJaPrice = this.onChangeJaPrice.bind(this);
        this.onChangeEnPrice = this.onChangeEnPrice.bind(this);
        this.onChangeJaDetail = this.onChangeJaDetail.bind(this);
        this.onChangeEnDetail = this.onChangeEnDetail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ja_course: "",
            en_course: "",
            ja_price: "",
            en_price: "",
            ja_detail: "",
            en_detail: ""
        }
    }
    onChangeJaCourse(e) {
        this.setState({
            ja_course: e.target.value
        })
    }
    onChangeEnCourse(e) {
        this.setState({
            en_course: e.target.value
        })
    }
    onChangeJaPrice(e) {
        this.setState({
            ja_price: e.target.value
        })
    }
    onChangeEnPrice(e) {
        this.setState({
            en_price: e.target.value
        })
    }
    onChangeJaDetail(e) {
        this.setState({
            ja_detail: e.target.value
        })
    }
    onChangeEnDetail(e) {
        this.setState({
            en_detail: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const color = {
            ja_course: this.state.ja_course,
            en_course: this.state.en_course,
            ja_price: this.state.ja_price,
            en_price: this.state.en_price,
            ja_detail: this.state.ja_detail,
            en_detail: this.state.en_detail,
        }


        axios.post('/color/add', color)
            .then(res => console.log(res.data));

        this.setState({
            ja_course: "",
            en_course: "",
            ja_price: "",
            en_price: "",
            ja_detail: "",
            en_detail: ""
        })
        window.location = "/admin/services/color"

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
                        <a href="/admin">GO TO LOGIN PAGE</a>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Create New Color Menu</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Japanese Course: </label>
                            <input type="text"

                                className="form-control"
                                value={this.state.ja_course}
                                onChange={this.onChangeJaCourse}
                            />
                        </div>
                        <div className="form-group">
                            <label>English Course: </label>
                            <input type="text"

                                className="form-control"
                                value={this.state.en_course}
                                onChange={this.onChangeEnCourse}
                            />
                        </div>
                        <div className="form-group">
                            <label>Japanese Price: </label>
                            <input type="text"

                                className="form-control"
                                value={this.state.ja_price}
                                onChange={this.onChangeJaPrice}
                            />
                        </div>
                        <div className="form-group">
                            <label>English Price: </label>
                            <input type="text"

                                className="form-control"
                                value={this.state.en_price}
                                onChange={this.onChangeEnPrice}
                            />
                        </div>
                        <div className="form-group">
                            <label>Japanese Detail: </label>
                            <input type="text"

                                className="form-control"
                                value={this.state.ja_detail}
                                onChange={this.onChangeJaDetail}
                            />
                        </div>
                        <div className="form-group">
                            <label>English Detail: </label>
                            <input type="text"

                                className="form-control"
                                value={this.state.en_detail}
                                onChange={this.onChangeEnDetail}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create Color" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            )
        }
    }
}

CreateColor.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(CreateColor);


