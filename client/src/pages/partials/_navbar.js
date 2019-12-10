import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import '../partials/navbar.style.css'
import { Menu } from "antd";


function Navbar() {
    return (

        <div className='na'>
            <BrowserRouter>
                <div className="nav_bar">
                    <Menu
                        id="test"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{
                            lineHeight: '64px',
                        }}
                    >

                        <Menu.Item key="1" className="testing">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </div>
            </BrowserRouter>
        </div>
    );
};
export default Navbar;