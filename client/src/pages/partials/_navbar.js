import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import '../partials/navbar.style.css'
import { Menu } from "antd";


function Navbar() {
    return (

        <div className='na'>
            <BrowserRouter>
                <div className="nav_bar">
                    <Link />
                    <Menu
                        id="test"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{
                            lineHeight: '64px',
                        }}
                    >

                        <Menu.Item key="1" className="testing"> <Link to="/">Top</Link></Menu.Item>
                        <Menu.Item key="1" className="testing"> <Link to="/about">About</Link></Menu.Item>
                        <Menu.Item key="1" className="testing"> <Link to="/contact">Contact</Link></Menu.Item>
                        <Menu.Item key="3" className="testing"><Link to="/photos">PhotoGallery</Link></Menu.Item>
                    </Menu>
                </div>
            </BrowserRouter>
        </div>
    );
};
export default Navbar;