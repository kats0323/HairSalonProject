import React from 'react';
import Navbar from './_navbar'
import TopPage from "../toppage/TopPage";
import About from "../about/About";
import Contact from "../contact/Contact";
import Price from "../price/Price"
import PhotoGallery from "../photoGallery/PhotoGallery"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function overall() {
  return (
    <div>
      <Router>
        <Switch>
          {/* About Page */}
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
          {/* Contact Page */}
          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route >
          {/* Price Page */}
          <Route path="/price">
            <Navbar />
            <Price />
          </Route >
          {/* Photo Page */}
          <Route path="/photos">
            <Navbar />
            <PhotoGallery />
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

