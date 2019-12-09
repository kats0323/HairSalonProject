import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import TopPage from "../toppage/TopPage";
import About from "../about/About";
import Contact from "../contact/Contact";
import Price from "../price/Price"
import PhotoGallery from "../photoGallery/PhotoGallery"
import '../partials/navbar.style.css'

function Navbar() {
    return (
       
        <div className='na'>
            <h1 className='ti'>Miho</h1>
       
            
        <BrowserRouter>
            <div className='ha'>
                <Link class="nav-right" to="/">Top</Link>
                <Link class="nav-right" to="/about">About</Link>
                <Link class="nav-right" to="/contact">Contact</Link>
                <Link class="nav-right" to="/price">Price</Link>
                <Link class="nav-right" to="/photos">PhotoGallery</Link>
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
export default Navbar;