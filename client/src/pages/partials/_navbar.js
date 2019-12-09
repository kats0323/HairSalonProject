import React from "react";
import { BrowserRouter, Link } from "react-router-dom";



function Navbar() {

    return (

        <BrowserRouter>
            <div>
                <Link to="/">Top</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/price">Price</Link>
                <Link to="/photos">PhotoGallery</Link>
            </div>
        </BrowserRouter >

    );
};

export default Navbar;