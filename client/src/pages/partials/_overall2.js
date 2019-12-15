import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AdminNav from '../../admin/pages/partials/_navbar'
import NavbarExpress from "../partials/_navbar_express"
import Price from "../price/Price";
import EditPrice from "../../admin/pages/edit/price/EditPrice";
import CreatePrice from "../../admin/pages/edit/price/CreatePrice";



function overall2() {
    return (
        <Router>
            <div className="container">
                <Route exact path="/admin/prices/edit/:id">
                    <AdminNav />
                    <NavbarExpress />
                    <EditPrice />
                </Route>
                <Route exact path="/admin/prices/create">
                    <AdminNav />
                    <NavbarExpress />
                    <CreatePrice />
                </Route>
                {/* this is the create page for prices */}
                <Route exact path="/admin/prices">
                    <AdminNav />
                    <NavbarExpress />
                    <Price />
                </Route>
            </div>
        </Router>
    );
}

export default overall2;