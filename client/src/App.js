import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "../src/pages/About";
import PhotoGallery from "../src/pages/PhotoGallery";
import Contact from "../src/pages/Contact";
import Price from "../src/pages/Price";
import TopPage from "../src/pages/TopPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Link to="/">Top</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/price">Price</Link>
            <Link to="/photos">PhotoGallery</Link>
            <Route exact path="/" component={TopPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/price" component={Price} />
            <Route exact path="/photos" component={PhotoGallery} />
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;