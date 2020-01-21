import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../partials/navbar.style.css'
import { Menu } from "antd";
import Price from "../price/Price";
import Cut from "../price/Cut";
import Perm from "../price/Perm";
import Color from "../price/Color";
import About from "../about/About";
import Contact from "../contact/Contact";
import PropTypes from "prop-types";
import { withRouter } from "react-router";




class Navbar extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            language: "English"
        }
    }
    onChangeJapanese() {
        this.setState({
            language: "Japanese"
        })
    }
    onChangeEnglish() {
        this.setState({
            language: "English"
        })
    }
    render() {
        // hr style
        const Line = ({ color }) => (
            <hr style={{ color: "green", border: "0.7px solid", width: "60%", }} />
        );
        const { location } = this.props
        return (
            <div className='na' >
                <div className="nav_bar">
                    <div className="logo-center">
                        <Link to="/"> <img src={process.env.PUBLIC_URL + '/img/GreenLogo.png'} alt="logo" style={{ height: "8vh" }} /> </Link>
                    </div>
                    <div className="style-line">
                        <Line />
                    </div>

                    <Menu
                        id="nav_bar_main"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        {this.state.language === "Japanese" ? (
                            <Menu.Item key="1" className="english_button" style={{ color: "darkgreen" }} onClick={this.onChangeEnglish.bind(this)}>English</Menu.Item>
                        ) : (
                                <Menu.Item key="1" className="japanese_button" style={{ color: "darkgreen" }} onClick={this.onChangeJapanese.bind(this)}>Japanese</Menu.Item>
                            )}
                        <Menu.Item key="5" className="nav_bar_nest"> <Link to={{ pathname: "/" }}>Home</Link></Menu.Item>
                        <Menu.Item key="6" className="nav_bar_nest"> <Link to="/about">About</Link></Menu.Item>
                        <Menu.Item key="7" className="nav_bar_nest"> <Link to="/contacts">Contact</Link></Menu.Item>
                        <Menu.Item key="8" className="nav_bar_nest"><Link to={location => ({ ...location, pathname: "/prices" })}>Price</Link></Menu.Item>
                        <Menu.Item key="9" className="nav_bar_nest"><Link to="/photos">PhotoGallery</Link></Menu.Item>
                        <Menu.Item key="10" className="nav_bar_nest"><Link to="/blogs">Blog</Link></Menu.Item>
                    </Menu>

                </div>
                {location.pathname === "/services/color" ? (
                    <Color language={this.state.language} />
                ) : (
                        console.log("")
                    )}
                {location.pathname === "/services/cut" ? (
                    <Cut language={this.state.language} />
                ) : (
                        console.log("")
                    )}
                {location.pathname === "/services/perm" ? (
                    <Perm language={this.state.language} />
                ) : (
                        console.log("")
                    )}
                {location.pathname === "/prices" ? (
                    <Price language={this.state.language} />
                ) : (
                        console.log("")
                    )}
                {location.pathname === "/about" ? (
                    <About language={this.state.language} />
                ) : (
                        console.log("")
                    )}
                {location.pathname === "/contacts" ? (
                    <Contact language={this.state.language} />
                ) : (
                        console.log("")
                    )}
            </div >

        );

    }
};
export default withRouter(Navbar)