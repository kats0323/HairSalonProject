import React, { Component } from "react";
import Admin from "./admin/pages/partials/_admin";
import Navbar from "./pages/partials/_navbar"


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Admin />
      </div>
    );
  };
};

export default App;