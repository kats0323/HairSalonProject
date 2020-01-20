import React, { Fragment, useEffect } from 'react';
import Login from '../../login/Login' //importing this from admin/login/Login.js
import EditDash from '../dashboard/EditDashboard' //importing this from admin/pages/dashboard/EditDashboard this is the admin page to check customers
import Register from '../../login/Register';
import Alert from "./Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import store from "../../store"
import { loadUser } from "../../actions/auth"
import setAuthToken from "../../utils/setAuthToken"

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Admin = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            {/* This is the main admin page or the first place they will visit when they log in */}
            <Route exact path="/admin" component={EditDash} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default Admin;

