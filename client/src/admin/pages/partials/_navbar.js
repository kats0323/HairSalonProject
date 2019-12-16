import React from 'react';
import '../partials/Navbar.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Navbar() { //exporting this component into react app
    return (
        <div>
            <Router >
                <aside>
                    <div class="title-box">
                        <h1 class="admin-title">Admin Page</h1>
                    </div>
                    <ul>
                        <div class="linktitle"><Link to="List" class="Link"><li>Customer List</li></Link></div>
                        <div class="linktitle"><Link to="/admin/alledit" class="Link"><li>Edit Pages</li></Link></div>
                        <div class="linktitle"><Link to="test2" class="Link"><li>test 2</li></Link></div>
                        <div class="linktitle"><Link to="test3" class="Link"><li>test 3</li></Link></div>
                    </ul>
                </aside>
            </Router >
        </div>
    );
}

