import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import '../partials/navbar.style.css'

function Navbar() {
    return (

        <div className='na'>
            <BrowserRouter>
                <div className='ha'>
                    <h1 className='ti'>Miho</h1>
                    <Link to="/">Top</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/price">Price</Link>
                    <Link to="/photos">PhotoGallery</Link>
                </div>
            </BrowserRouter>
        </div>
    );
};
export default Navbar;