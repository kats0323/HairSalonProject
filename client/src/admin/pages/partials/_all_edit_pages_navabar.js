import React from 'react';
import '../partials/Navbar.css'
import { BrowserRouter as Router } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';

export default function AllEditPagesNavbar() { //exporting this component into react app
    return (
        <div>
            <Router >
                <aside>
                    <div class="title-box">
                        <h1 class="admin-title">Admin Page</h1>
                    </div>
                    <ul>
                        {/* About */}
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/admin/about">About List</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/admin/about/create">Create About</NavDropdown.Item>
                        </NavDropdown>

                        {/* Blog */}
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/admin/blogs">Blog List</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/admin/blogs/create"> Create Blog</NavDropdown.Item>
                        </NavDropdown>

                        {/* Price */}
                        <NavDropdown title="Price" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/admin/prices">Price List</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/admin/prices/create">Create Price</NavDropdown.Item>
                        </NavDropdown>

                        {/* Contact */}
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                        {/* Photos */}
                        <NavDropdown title="Photos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/admin/photos">Photo Gralley</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/admin/photos/create">Create Photo</NavDropdown.Item>
                        </NavDropdown>
                    </ul>
                </aside>
            </Router >
        </div>
    );
}

