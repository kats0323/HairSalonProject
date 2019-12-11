import React, { Component } from "react";
import Overall from "./pages/partials/_overall" // Maybe give it a different name instead of navbar
import Admin from "./admin/pages/partials/_admin"
import Overall2 from "./pages/partials/_overall2"
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {
  render() {
    return (
      <div>
        <Overall />
        <Admin />
        <Overall2 />
      </div>
    );
  };
};

export default App;