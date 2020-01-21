import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'


class CreateAbout extends Component {
    constructor(props) {
        super(props)

        this.onChangeEnIntroduction = this.onChangeEnIntroduction.bind(this);
        this.onChangeJaIntroduction = this.onChangeJaIntroduction.bind(this);
        this.onPhotoChange = this.onPhotoChange.bind(this);


        this.state = {
            en_introduction: "",
            ja_introduction: "",
            photo: ""
        }
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
    }
    onPhotoChange(e) {
        this.setState({ photo: e.target.files[0] })
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
                        <form action="/about/add" method="POST" enctype="multipart/form-data" >
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
                                <input type="file" name="photo" onChange={this.onPhotoChange} />
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

CreateAbout.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(CreateAbout);