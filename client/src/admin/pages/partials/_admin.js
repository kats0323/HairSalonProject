import React from 'react';
import Login from '../../login/Login' //importing this from admin/login/Login.js
import List from '../lists/List' //importing this from admin/pages/list/list this is the admin page to check customers

import { BrowserRouter as Router , Switch , Route } from "react-router-dom";


export default function admin() {
    return (
      <div>
        <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/admin" component={List} />
            </Switch>
        </Router>
      </div>
    );
};

