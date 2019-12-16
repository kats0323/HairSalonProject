import React from 'react';
import Login from '../../login/Login' //importing this from admin/login/Login.js
import Dash from '../dashboard/Dashboard' //importing this from admin/pages/dashboard/Dashboard this is the admin page to check customers
import Post from '../blogPost/post' //importing this from admin/pages/list/list this is the admin page to check customers
import EditDashboard from "../dashboard/EditDashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




export default function admin() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />

          {/* This is the admin post page which is where they generally post upadates */}
          <Route path="/admin/post" component={Post} />

          {/* This is the main admin page or the first place they will visit when they log in */}
          <Route exact path="/admin" component={Dash} />


          <Route exact path="/admin/alledit" component={EditDashboard} />


        </Switch>
      </Router>
    </div>
  );
};

