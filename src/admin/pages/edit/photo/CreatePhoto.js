import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'


class CreatePhoto extends Component {

    constructor(props) {
        super(props);

        this.onPhotoChange = this.onPhotoChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            photo: ''
        }
    }

    onPhotoChange(e) {
        this.setState({ photo: e.target.files[0] })
    }
    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', this.state.photo)
        axios.post("/photos/add", formData, {
        }).then(res => {
            console.log(res)
        })
        window.location = '/admin/photos/create';
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
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="file" onChange={this.onPhotoChange} />
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
CreatePhoto.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(CreatePhoto);

