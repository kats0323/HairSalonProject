import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllEditPagesNavbar from '../../admin/pages/partials/_all_edit_pages_navabar'
import PriceList from "../../admin/pages/edit/price/PriceList";
import EditPrice from "../../admin/pages/edit/price/EditPrice";
import CreatePrice from "../../admin/pages/edit/price/CreatePrice";
import AboutList from "../../admin/pages/edit/about/AboutList";
import EditAbout from "../../admin/pages/edit/about/EditAbout";
import CreateAbout from "../../admin/pages/edit/about/CreateAbout";



function overall2() {
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

export default overall2;