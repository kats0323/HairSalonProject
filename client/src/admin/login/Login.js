import React, { Fragment, useState } from 'react'
import { Link } from "react-router-dom";
import "./Login.css"
export const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password, password2 } = formData
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = async e => {
        e.preventDefault(formData);
        console.log()
        if (password !== password2) {
            console.log("password do not match")
        } else {
            console.log("SUCCESS")
        }
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
                    <Link to="/register">Register</Link>
                </div>
            </div >
        </Fragment>
    )
}

export default Login;
