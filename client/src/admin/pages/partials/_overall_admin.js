import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllEditPagesNavbar from './_all_edit_pages_navabar'
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
import { Provider } from "react-redux";
import store from "../../store"


function overallAdmin() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>

                    <Route path="/admin/alledit" exact component={AllEditPagesNavbar} />
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
            </Router>
        </Provider>
    );
}

export default overallAdmin;