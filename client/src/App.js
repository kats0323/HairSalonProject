import React, { Component } from "react";
import Overall from "./pages/partials/_overall" // Maybe give it a different name instead of navbar
import Admin from "./admin/pages/partials/_admin"

class App extends Component {
  render() {
    return (
        <div>
            <Overall />
            <Admin />
        </div>
    );
  };
};

export default App;