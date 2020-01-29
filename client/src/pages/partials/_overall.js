import React from 'react';
import Navbar from './_navbar'
import Footer from './_footer'
import TopPage from "../toppage/TopPage";
import PhotoGallery from "../photoGallery/PhotoGallery";
import Blog from "../blog/Blog";
import Admin from "../../admin/pages/partials/_admin";
// import Cut from "../price/Cut";
// import Perm from "../price/Perm";
// import Color from "../price/Color";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function overall() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" >
            <Admin />
          </Route>
          {/* About Page */}
          <Route path="/about" >
            <Navbar />
          </Route>
          {/* Contact Page */}
          <Route path="/contacts">
            <Navbar />
          </Route >
          
          {/* Price Page */}
          
          <Route path="/prices" >
            <Navbar />
            <Footer />
          </Route >

          {/* Cut Page */}
          <Route path="/services/cut" >
            <Navbar />
            <Footer />
          </Route >

          {/* Perm Page */}
          <Route path="/services/perm" >
            <Navbar />
            <Footer />
          </Route >

          {/* Color Page */}
          <Route path="/services/color" >
            <Navbar />
            <Footer />
          </Route >

          {/* Photo Page */}
          <Route path="/photos">
            <Navbar />
            <PhotoGallery />
            <Footer />
          </Route >
          {/* Blog Page */}
          <Route path="/blogs">
            <Navbar />
            <Blog />
            <Footer />
          </Route >
          {/* Home Page */}
          <Route exact path="/">
            <Navbar />
            <TopPage />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

