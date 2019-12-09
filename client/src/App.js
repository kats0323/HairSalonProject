import React, { Component } from "react";
import Navbar from "./pages/partials/_navbar" // Maybe give it a different name instead of navbar
import Admin from "./admin/pages/partials/_admin"

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