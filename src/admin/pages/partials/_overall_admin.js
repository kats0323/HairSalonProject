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
import CreateLocation from "../edit/contact/CreateLocation";
import LocationList from "../edit/contact/LocationList";
import CreateColor from "../edit/price/Menu/Color/CreateColor";
import ColorList from "../edit/price/Menu/Color/ColorList";
import CreatePerm from "../edit/price/Menu/Perm/CreatePerm";
import PermList from "../edit/price/Menu/Perm/PermList";
import CreateCut from "../edit/price/Menu/Cut/CreateCut";
import CutList from "../edit/price/Menu/Cut/CutList";
import EditColor from "../edit/price/Menu/Color/EditColor";
import EditCut from "../edit/price/Menu/Cut/EditCut";
import EditPerm from "../edit/price/Menu/Perm/EditPerm";
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
                    <Route path="/admin/locations/create" exact component={CreateLocation} />
                    <Route path="/admin/locations" exact component={LocationList} />
                    <Route path="/admin/services/color/create" exact component={CreateColor} />
                    <Route path="/admin/services/color" exact component={ColorList} />
                    <Route path="/admin/services/cut/create" exact component={CreateCut} />
                    <Route path="/admin/services/cut" exact component={CutList} />
                    <Route path="/admin/services/perm/create" exact component={CreatePerm} />
                    <Route path="/admin/services/perm" exact component={PermList} />
                    <Route path="/admin/services/color/edit/:id" exact component={EditColor} />
                    <Route path="/admin/services/perm/edit/:id" exact component={EditPerm} />
                    <Route path="/admin/services/cut/edit/:id" exact component={EditCut} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default overallAdmin;