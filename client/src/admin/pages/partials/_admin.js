import React from 'react';
import Login from '../../login/Login' //importing this from admin/login/Login.js
import EditDash from '../dashboard/EditDashboard' //importing this from admin/pages/dashboard/EditDashboard this is the admin page to check customers
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




export default function admin() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />


          {/* This is the main admin page or the first place they will visit when they log in */}
          <Route exact path="/admin" component={EditDash} />





        </Switch>
      </Router>
    </div>
  );
};

