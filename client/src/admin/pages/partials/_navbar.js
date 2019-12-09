import React from 'react';
import '../partials/Navbar.css'
import { BrowserRouter as Router , Link  } from "react-router-dom";

export default function Navbar() { //exporting this component into react app
    return (
        <div>
            <Router >
               <aside>
                    <h1>XD</h1>
                    <ul>
                        <Link to="/list" class="linktitle"><li>Test1</li></Link>  
                        <Link to="/test2" class="linktitle"><li>Test2</li></Link>  
                        <Link to="/test3" class="linktitle"><li>Test3</li></Link>  
                        <Link to="/test4" class="linktitle"><li>Test4</li></Link>  
                    </ul>
                </aside>
            </Router >
        </div>
    );
  }
  
  