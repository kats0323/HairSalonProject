import React, { Fragment, useState } from 'react'
import { Link } from "react-router-dom";
import "./Register.css"
export const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password2: ""
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
                <div className="outerbox_register" style={{ width: "100vw", height: "100vh" }} />
                <div className="bg-text">
                    <h1 className="register-title">Register</h1>
                    <form onSubmit={e => onSubmit(e)}>
                        <input className="input" type="text" placeholder="Email" name="email"
                            value={email} onChange={e => onChange(e)} required /> {/* Text field input */}
                        <input className="input" type="password" placeholder="Password" name="password" minLength="6" value={password} onChange={e => onChange(e)} required />{/* Password field hides the password */}
                        <input className="input" type="password" placeholder="Password2" name="password2" minLength="6" value={password2} onChange={e => onChange(e)} required />{/* Password2 field hides the password */}
                        <button type="submit" id="register-button" className="login-button">Register</button>{/* this is the login button */}
                    </form>
                    <br />
                    <Link to="/login">Login</Link>
                </div>
            </div >
        </Fragment>
    )
}

export default Register;
