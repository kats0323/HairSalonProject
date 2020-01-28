import React, { Fragment, useState } from 'react'
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from 'prop-types'

import "./Register.css"
export const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password2: ""
    })

    const { email, password, password2 } = formData
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = async e => {
        e.preventDefault(formData);

        if (password !== password2) {
            setAlert("password do not match", "danger")
        } else {
            register({ email, password })
        }
    }
    if (isAuthenticated) {
        return <Redirect to="/admin" />
    }
    return (
        <Fragment>
            <div>
                {/* this is the is the background with gradient and blurred effect */}
                <div className="outerbox_register" style={{ width: "100vw", height: "100vh" }} />
                <div className="bg-text">
                    <h1 className="register-title">Register</h1>
                    <form onSubmit={e => onSubmit(e)}>
                        <input className="input" type="text" placeholder="Email" name="email"
                            value={email} onChange={e => onChange(e)} /> {/* Text field input */}
                        <input className="input" type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} required />{/* Password field hides the password */}
                        <input className="input" type="password" placeholder="Password2" name="password2" value={password2} onChange={e => onChange(e)} />{/* Password2 field hides the password */}
                        <button type="submit" id="register-button" className="login-button">Register</button>{/* this is the login button */}
                    </form>
                    <br />
                    <Link to="/login" className="log-btn">Login</Link>
                </div>
            </div >
        </Fragment>
    )
}
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);
