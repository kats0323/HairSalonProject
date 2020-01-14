import React, { Component } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import '../partials/navbar.style.css'
import { Menu } from "antd";
import Price from "../price/Price";
import About from "../about/About";
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
        const { location } = this.props
        return (
            <div className='na' >
                <div className="nav_bar">

                    <Menu
                        id="nav_bar_main"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item key="1" > <Link to={{ pathname: "/" }}><img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" style={{ height: "50px" }} /> </Link></Menu.Item>
                        {this.state.language === "Japanese" ? (
                            <Menu.Item key="1" className="english_button" style={{ color: "black" }} onClick={this.onChangeEnglish.bind(this)}> English</Menu.Item>
                        ) : (
                                <Menu.Item key="1" className="japanese_button" style={{ color: "white" }} onClick={this.onChangeJapanese.bind(this)}>Japanese</Menu.Item>
                            )}

                        < Menu.Item key="1" className="nav_bar_nest"> <Link to="/about">About</Link></Menu.Item>
                        <Menu.Item key="1" className="nav_bar_nest"> <Link to="/contact">Contact</Link></Menu.Item>
                        <Menu.Item key="3" className="nav_bar_nest"><Link to={location => ({ ...location, pathname: "/price" })}>Price</Link></Menu.Item>
                        <Menu.Item key="3" className="nav_bar_nest"><Link to="/photos">PhotoGallery</Link></Menu.Item>
                        <Menu.Item key="3" className="nav_bar_nest"><Link to="/blogs">Blog</Link></Menu.Item>
                    </Menu>

                </div>
                {location.pathname === "/price" ? (
                    <Price language={this.state.language} />
                ) : (
                        console.log("not price page")
                    )}
                {location.pathname === "/about" ? (
                    <About language={this.state.language} />
                ) : (
                        console.log("not about page")
                    )}
            </div >

        );

    }
};
export default withRouter(Navbar)