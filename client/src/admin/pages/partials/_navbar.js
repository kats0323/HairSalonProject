import React from 'react';
import AllEditPagesNavbar from './_all_edit_pages_navabar'
import '../partials/Navbar.css'
import { BrowserRouter as Router, Link , Switch , Route} from "react-router-dom";

function 

function Navbar() { 
    return (
        <div>
            <Router >
                    <div id="mydrawer">
                    <ul>
                        <div class="linktitle"><Link to="List" class="Link"><li>Customer List</li></Link></div>
                        <div class="linktitle"><Link to="/admin/alledit" class="Link"><li>Edit Pages</li></Link></div>
                        <div class="linktitle"><Link to="test2" class="Link"><li>test 2</li></Link></div>
                        <div class="linktitle"><Link to="test3" class="Link"><li>test 3</li></Link></div>
                    </ul>
                    </div>
                <Switch> 
                    <Route exact path="/admin/alledit" component={AllEditPagesNavbar}></Route>
                </Switch>
            </Router >
        </div>
    );
}

export default Navbar;