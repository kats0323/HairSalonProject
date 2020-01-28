import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

class EditAbout extends Component {
    constructor(props) {
        super(props)
        this.onChangeEnIntroduction = this.onChangeEnIntroduction.bind(this);
        this.onChangeJaIntroduction = this.onChangeJaIntroduction.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            en_introduction: "",
            ja_introduction: "",
        }
    }
    componentDidMount() {
        axios.get('/about/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    en_introduction: response.data.en_introduction,
                    ja_introduction: response.data.ja_introduction,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeEnIntroduction(e) {
        this.setState({
            en_introduction: e.target.value
        })
    }
    onChangeJaIntroduction(e) {
        this.setState({
            ja_introduction: e.target.value
        })
        console.log(this.state.ja_introduction)
    }

    onSubmit(e) {
        e.preventDefault();
        const about = {
            en_introduction: this.state.en_introduction,
            ja_introduction: this.state.ja_introduction
        }
        console.log("TESTTTT ABOUT", about);
        axios.put('/about/update/' + this.props.match.params.id, about)
            .then(res => console.log(res.data));
        this.setState({
            en_introduction: "",
            ja_introduction: ""
        })
        // window.location = '/admin/about';
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
                <div className="container" style={{ paddingLeft: "200px" }}>
                    <div className="row">
                        <form onSubmit={this.onSubmit} enctype="multipart/form-data">
                            <div className="form-group">
                                <label>English Introduction: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    name="en_introduction"
                                    value={this.state.en_introduction}
                                    onChange={this.onChangeEnIntroduction}
                                />
                            </div>
                            <div className="form-group">
                                <label>Japanese Introduction: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    name="ja_introduction"
                                    value={this.state.ja_introduction}
                                    onChange={this.onChangeJaIntroduction}
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit" onSubmit={this.onSubmit}>Upload</button>
                            </div>
                        </form>
                    </div>
                </div >
            )
        }
    }
}

EditAbout.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(EditAbout);