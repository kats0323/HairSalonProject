import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllEditPagesNavbar from './_all_edit_pages_navabar'
import PriceList from "../edit/price/PriceList";
import EditPrice from "../edit/price/EditPrice";
import CreatePrice from "../edit/price/CreatePrice";
import AboutList from "../edit/about/AboutList";
import EditAbout from "../edit/about/EditAbout";
import CreateAbout from "../edit/about/CreateAbout";
import CreatePhoto from "../edit/photo/CreatePhoto"
import PhotoList from "../edit/photo/PhotoList"


function overallAdmin() {
    return (
        <Router>
            <div className="container">
                <Route path="/admin/alledit" component={AllEditPagesNavbar} />


                <Route path="/admin/prices" exact component={PriceList} />
                <Route path="/admin/prices/edit/:id" exact component={EditPrice} />
                <Route path="/admin/prices/create" exact component={CreatePrice} />
                <Route path="/admin/about" exact component={AboutList} />
                <Route path="/admin/about/edit/:id" exact component={EditAbout} />
                <Route path="/admin/about/create" exact component={CreateAbout} />
                <Route path="/admin/photos/create" exact component={CreatePhoto} />
                <Route path="/admin/photos" exact component={PhotoList} />
            </div>
        </Router>
    );
}

export default overallAdmin;