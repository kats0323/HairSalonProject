import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import '../partials/navbar.style.css'
import { Menu } from "antd";


function Navbar() {
    return (

        <div className='na'>
            
                <div className="nav_bar">
                    <Link />
                    <Menu
                        id="nav_bar_main"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item key="1" > <Link to="/"><img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" style={{ height: "50px" }} /> </Link></Menu.Item>
                        <Menu.Item key="1" className="testing"> <Link to="/about">About</Link></Menu.Item>
                        <Menu.Item key="1" className="testing"> <Link to="/contact">Contact</Link></Menu.Item>
                        <Menu.Item key="3" className="testing"><Link to="/price">Price</Link></Menu.Item>
                        <Menu.Item key="3" className="testing"><Link to="/photos">PhotoGallery</Link></Menu.Item>
                    </Menu>
                </div>
            
        </div>
    );
};
export default Navbar;