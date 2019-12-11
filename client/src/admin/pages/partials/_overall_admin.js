import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllEditPagesNavbar from './_all_edit_pages_navabar'
import PriceList from "../edit/price/PriceList";
import EditPrice from "../edit/price/EditPrice";
import CreatePrice from "../edit/price/CreatePrice";
import AboutList from "../edit/about/AboutList";
import EditAbout from "../edit/about/EditAbout";
import CreateAbout from "../edit/about/CreateAbout";



function overallAdmin() {
    return (
        <Router>
            <div className="container">
                <AllEditPagesNavbar />

                <Route path="/admin/prices" exact component={PriceList} />
                <Route path="/admin/prices/edit/:id" exact component={EditPrice} />
                <Route path="/admin/prices/create" exact component={CreatePrice} />
                <Route path="/admin/about" exact component={AboutList} />
                <Route path="/admin/about/edit/:id" exact component={EditAbout} />
                <Route path="/admin/about/create" exact component={CreateAbout} />
            </div>
        </Router>
    );
}

export default overallAdmin;