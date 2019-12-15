import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavbarExpress extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">

                        <li className="navbar-item">
                            <Link to="/admin/prices" className="nav-link">Price</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/admin/prices/create" className="nav-link">Create  Price</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}