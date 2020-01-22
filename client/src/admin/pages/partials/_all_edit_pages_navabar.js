import React from 'react';
import PriceList from "../edit/price/PriceList";
import EditPrice from "../edit/price/EditPrice";
import CreatePrice from "../edit/price/CreatePrice";
import AboutList from "../edit/about/AboutList";
import EditAbout from "../edit/about/EditAbout";
import CreateAbout from "../edit/about/CreateAbout";
import CreatePhoto from "../edit/photo/CreatePhoto";
import PhotoList from "../edit/photo/PhotoList";
import CreateBlog from "../edit/blog/CreateBlog";
import BlogList from "../edit/blog/BlogList";
import CreateContact from "../edit/contact/CreateContact";
import ContactList from "../edit/contact/ContactList";
import '../partials/Navbar.css'
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from "react-router-dom";
import { NavDropdown, Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import { connect } from "react-redux";
import PropTypes from "prop-types"
import { logout } from "../../actions/auth";

const AllEditPagesNavbar = ({ auth: { isAuthenticated, loading }, logout }) => { //exporting this component into react app

    if (!isAuthenticated) {
        return <Redirect to="/login" />
    }
    return (
        <div>
            <Router >
                <Switch>

            <Navbar bg="green" expand="lg">
                <Navbar.Brand ><Link to="/"><img className='logo-green'src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" style={{ height: "50px", paddingRight: "30px" }} /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                  
                         <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/admin/about">About List</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>< Link to="/admin/about/create">Create About</Link></NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/admin/blogs">Blog List</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/admin/blogs/create"> Create Blog</Link></NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Price" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/admin/prices">Price List</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/admin/prices/create">Create Price</Link></NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/admin/contacts">Contact List</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/admin/contacts/create">Create Contact</Link></NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Photos" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/admin/photos">Photo Gralley</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/admin/photos/create">Create Photo</Link></NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown.Divider />
                        <Nav.Link > {!loading && { isAuthenticated } ? (
                                <Link to="#!" onClick={logout}>Logout</Link>
                            ) : (null)}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
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
                    <Route path="/admin/blogs/create" exact component={CreateBlog} />
                    <Route path="/admin/blogs" exact component={BlogList} />
                    <Route path="/admin/contacts/create" exact component={CreateContact} />
                    <Route path="/admin/contacts" exact component={ContactList} />
                </Switch>
            </Router >
        </div>
    );
}

AllEditPagesNavbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(AllEditPagesNavbar);