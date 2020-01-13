import React from 'react';
import PriceList from "../edit/price/PriceList";
import EditPrice from "../edit/price/EditPrice";
import CreatePrice from "../edit/price/CreatePrice";
import AboutList from "../edit/about/AboutList";
import EditAbout from "../edit/about/EditAbout";
import CreateAbout from "../edit/about/CreateAbout";
import CreatePhoto from "../edit/photo/CreatePhoto";
import PhotoList from "../edit/photo/PhotoList";
import '../partials/Navbar.css'
import { BrowserRouter as Router,Switch, Link, Route} from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';

export default function AllEditPagesNavbar() { //exporting this component into react app
    return (
        <div>
            <Router >
                <Switch>
                <aside>
                    <div class="title-box">
                        <h1 class="admin-title">Admin Page</h1>
                    </div>
                    <ul>
                        {/* About */}
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/admin/about">About List</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>< Link to="/admin/about/create">Create About</Link></NavDropdown.Item>
                        </NavDropdown>

                        {/* Blog */}
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="#action/3.3">Something</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="#action/3.4">Separated link</Link></NavDropdown.Item>
                        </NavDropdown>

                        {/* Price */}
                        <NavDropdown title="Price" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to ="/admin/prices">Price List</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to ="/admin/prices/create">Create Price</Link></NavDropdown.Item>
                        </NavDropdown>

                        {/* Contact */}
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="#action/3.3">Something</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="#action/3.4">Separated link</Link></NavDropdown.Item>
                        </NavDropdown>

                        {/* Photos */}
                        <NavDropdown title="Photos" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to ="/admin/photos">Photo Gralley</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/admin/photos/create">Create Photo</Link></NavDropdown.Item>
                        </NavDropdown>
                    </ul>
                </aside>
                </Switch>

                <Switch>
                    <Route path="/admin/prices" exact component={PriceList} />
                    <Route path="/admin/prices/edit/:id" exact component={EditPrice} />
                    <Route path="/admin/prices/create" exact component={CreatePrice} />
                    <Route path="/admin/about" exact component={AboutList} />
                    <Route path="/admin/about/edit/:id" exact component={EditAbout} />
                    <Route path="/admin/about/create" exact component={CreateAbout} />
                    <Route path="/admin/photos/create" exact component={CreatePhoto} />
                    <Route path="/admin/photos" exact component={PhotoList} />
                </Switch>
            </Router >
        </div>
    );
}

