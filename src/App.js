import React, { Component } from "react";
import Overall from "./pages/partials/_overall" // Maybe give it a different name instead of navbar
import Admin from "./admin/pages/partials/_admin"
import OverallAdmin from "./admin/pages/partials/_overall_admin"
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {
  render() {
    return (
      <div>
        <Overall />
        <Admin />
        <OverallAdmin />
      </div>
    );
  };
};

export default App;