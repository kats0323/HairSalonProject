import React, { Component } from "react";
import Navbar from "./pages/partials/_navbar" // Maybe give it a different name instead of navbar
import Login from './admin/login/Login' //importing this from admin/login/Login.js
import List from './admin/pages/lists/List' //importing this from admin/pages/list/list this is the admin page to check customers

import { BrowserRouter as Router , Switch , Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route path="/" component={Navbar} / >
              <Route path="/login" component={Login} />
              <Route path="/admin" component={List} />
            </Switch>
        </Router>
      </div>
    );
  };
};

export default App;