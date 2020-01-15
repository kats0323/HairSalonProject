import React from 'react';
import Navbar from './_navbar'
import TopPage from "../toppage/TopPage";
import About from "../about/About";
import Contact from "../contact/Contact";
import PhotoGallery from "../photoGallery/PhotoGallery";
import Blog from "../blog/Blog";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function overall() {
  return (
    <div>
      <Router>
        <Switch>
          {/* About Page */}
          <Route path="/about" >
            <Navbar />
          </Route>
          {/* Contact Page */}
          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route >
          {/* Price Page */}
          <Route path="/price" >
            <Navbar />
          </Route >
          {/* Photo Page */}
          <Route path="/photos">
            <Navbar />
            <PhotoGallery />
          </Route >
          {/* Blog Page */}
          <Route path="/blogs">
            <Navbar />
            <Blog />
          </Route >
          {/* Home Page */}
          <Route exact path="/">
            <Navbar />
            <TopPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

