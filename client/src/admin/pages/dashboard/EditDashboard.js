import React from 'react';
import AllEditPagesNavbar from '../partials/_all_edit_pages_navabar'
export default function EditDashboard() { //exporting this component into react app
    console.log("Edit dash")
    return (
        <div>
            <AllEditPagesNavbar />
            <h1 className="main"> Admin Page </h1>
        </div>
    );
}