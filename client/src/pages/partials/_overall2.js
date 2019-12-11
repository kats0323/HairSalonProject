import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarExpress from "../partials/_navbar_express"
import Price from "../price/Price";
import EditPrice from "../../admin/pages/edit/price/EditPrice";
import CreatePrice from "../../admin/pages/edit/price/CreatePrice";



function Overall2() {
    return (
        <Router>
            <div className="container">
                <NavbarExpress />
                <Route path="/prices" exact component={Price} />

                <Route path="/prices/edit/:id" exact component={EditPrice} />
                <Route path="/prices/create" exact component={CreatePrice} />
            </div>
        </Router>
    );
}

export default Overall2;