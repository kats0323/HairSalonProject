import React, { Fragment, useState } from 'react'
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import PropTypes from 'prop-types'
import "./Login.css"

export const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    // Redirected if logged in

    if (isAuthenticated) {
        return <Redirect to="/admin" />
    }
    return (
        <Fragment>
            <div>
                {/* this is the is the background with gradient and blurred effect */}
                <div className="outerbox_login" style={{ width: "100vw", height: "100vh" }} />
                <div className="bg-text">
                    <h1 className="login-title">login</h1>
                    <form onSubmit={e => onSubmit(e)}>
                        <input className="input" type="text" placeholder="Email" name="email"
                            value={email} onChange={e => onChange(e)} required /> {/* Text field input */}
                        <input className="input" type="password" placeholder="Password" name="password" minLength="6" value={password} onChange={e => onChange(e)} required />{/* Password field hides the password */}
                        <button type="submit" id="login-button" className="login-button" value="Login">Login</button>{/* this is the login button */}
                    </form>
                    <br />
                    <Link to="/register"  className="register-button">Register</Link>
                </div>
            </div >
        </Fragment>
    )
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
